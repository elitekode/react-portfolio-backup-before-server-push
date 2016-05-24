import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match, createMemoryHistory } from 'react-router'
import axios from 'axios';
import { Provider } from 'react-redux';
import createRoutes from 'routes.jsx';
import configureStore from 'store/configureStore';
import headconfig from 'components/Meta';
import { fetchComponentDataBeforeRender } from 'api/fetchComponentDataBeforeRender';

const clientConfig = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || '3000'
};

// configure baseURL for axios requests (for serverside API calls)
axios.defaults.baseURL = `http://${clientConfig.host}:${clientConfig.port}`;

/*
 * Our html template file
 * @param {String} renderedContent
 * @param initial state of the store, so that the client can be hydrated with the same state as the server
 * @param head - optional arguments to be placed into the head
 */
function renderFullPage(renderedContent, initialState, head={
  title: 'Kochan Desai Portfolio',
  meta: '<meta name="viewport" content="width=device-width, initial-scale=1" />',
  link: '<link rel="stylesheet" href="/assets/styles/main.css"/>',
  link: '<link rel="stylesheet" href="/assets/styles/_bootstrap.css"/>'

}) {
  return `
  <!doctype html>
    <html lang="">

    <head>
        ${head.title}

        ${head.meta}

        ${head.link}
    </head>
    <body>
    <div id="app">${renderedContent}</div>

    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
    </script>
    <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.7/react-dom.min.js"></script>
    </body>
    </html>

  `;
}

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req, res) {
    const history = createMemoryHistory();
    const authenticated = req.isAuthenticated();
    const store = configureStore({
      user: {
        authenticated: authenticated,
        isWaiting: false,
        message: '',
        isLogin: true
      }
    }, history);

    const routes = createRoutes(store);

   match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      const InitialView = (
        <Provider store={store}>
            <RouterContext {...renderProps} />
        </Provider>
      );

      //This method waits for all render component promises to resolve before returning to browser
      fetchComponentDataBeforeRender(store.dispatch, renderProps.components, renderProps.params)
      .then(html => {
        const componentHTML = renderToString(InitialView);
        const initialState = store.getState();
        res.status(200).end(renderFullPage(componentHTML, initialState, {
          title: headconfig.title,
          meta: headconfig.meta,
          link: headconfig.link
        }));
      })
      .catch(err => {
        res.end(renderFullPage("",{}));
      });
    } else {
      res.status(404).send('Not Found');
    }
  });
}
