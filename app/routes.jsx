import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Vote from 'containers/Vote';
import Blog from 'containers/Blog';
import Tags from 'containers/Tags';
import Hire from 'containers/HireMe';
import About from 'containers/About';
import LoginOrRegister from 'containers/LoginOrRegister';
import Dashboard from 'containers/Dashboard';
import Articles from 'articles/articles';
import Articles1 from 'articles/articles1';
import Articles2 from 'articles/articles2';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      // replace({
      //   pathname: '/'
      // });
      console.log("testing auth");
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Blog} />
      <Route path="login" component={LoginOrRegister}  />
      <Route path="tags" component={Tags} />
      <Route path="articles" component={Articles} />
      <Route path="articles1" component={Articles1} />
      <Route path="articles2" component={Articles2} />
      <Route path="postTopic" component={Vote} onEnter={requireAuth}/>
      <Route path="hire" component={Hire} />
      <Route path="about" component={About} />
    </Route>
  );
};
