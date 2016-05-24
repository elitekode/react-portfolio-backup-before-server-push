import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from 'actions/users';
import styles from 'scss/components/login';
import hourGlassSvg from 'images/hourglass.svg';


import Votes from '../containers/Vote';


const cx = classNames.bind(styles);

class Articles extends Component {
  /*
  * This replaces getInitialState. Likewise getDefaultProps and propTypes are just
  * properties on the constructor
  * Read more here: https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes
  */
  constructor(props) {
    super(props);
    this.toggleMode = this.toggleMode.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }

  toggleMode() {
    this.props.dispatch(toggleLoginMode());
  }

  onLoginSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(manualLogin({
      email: email,
      password: password
    }));
  }

  onRegisterSubmit() {
    const { dispatch } = this.props;
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    dispatch(signUp({
      email: email,
      password: password
    }));
  }

  renderHeader() {
    const { isLogin,isWaiting, message,authenticated } = this.props.user;


    if (authenticated) {
      return (
        <Votes />
      );
    }

    else if (isLogin) {
      return (
        <div className={cx('login__header')}>
          <div className={cx('login__alternative')}>
            You have to login to post a comment.
            <a className={cx('login__alternative-link')}
              onClick={this.toggleMode}> login</a>
          </div>
        </div>
      );
    }

    return (
      <div className={cx('login', {
          'login--waiting': isWaiting
        })}>
        <div className={cx('login__container')}>
          <h2>Login with your email or google account </h2>
          <img className={cx('login__loading')} src={hourGlassSvg} />
          <div className={cx('login__email-container')}>
            <input className={cx('login__input')}
              type="email"
              ref="email"
              placeholder="email" />
            <input className={cx('login__input')}
              type="password"
              ref="password"
              placeholder="password" />
            <p className={cx('login__message', {
                'login__message-show': message && message.length > 0
              })}>{message}</p>
              { this.renderButton() }
            </div>
            <div className={cx('login__google-container')}>
              <a className={cx('login__button')}
                href="/auth/google">Login with Google</a>
            </div>
          </div>
        </div>
      );
    }

    renderButton() {
      const { isLogin } = this.props.user;
      if (isLogin) {
        return (
          <button className={cx('login__button')}
            onClick={this.onRegisterSubmit}>Register</button>
        );
      }

      return (
        <button className={cx('login__button')}
          onClick={this.onLoginSubmit}>Login</button>

      );
    }

    render() {
      const { isWaiting, message,authenticated } = this.props.user;

      return (
        <div className={cx('login', {
            'login--waiting': isWaiting
          })}>
          <div className={cx('login__container')}>
            <h1>React = faster development</h1>
            <hr />
            <p>React is starting to turn heads this year with all these components that are reusable.<br />React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.
              <br /> React creates interfaces that can be abstract on the dom on the server and the client-side.
            </p>
            <h2> Getting started </h2>
            <pre> Step 1. npm install --save react react-dom babel-preset-react <br /> Step 2. webpack </pre>
            <p>Or download the startkit here </p>
            <div className={cx('buttons-unit downloads')}>
              <a href="https://facebook.github.io/react/downloads/react-15.0.1.zip" className={cx('buttons')}>
                Download Starter Kit 15.0.1
              </a>
            </div>

            <span className={cx('how')}> In the root directory of the starter kit, create a index.html with the following contents.</span>
            <div className={cx('highlight')}>
              <pre><code className={cx('language-html')} data-lang="html"><span className={cx('cp')}>&lt;!DOCTYPE html&gt;</span><br />
              <span className={cx('nt')}>&lt;html&gt;</span><br />
              <span className={cx('nt')}>&lt;head&gt;</span><br />
              <span className={cx('nt')}>     &lt;meta</span> <span className={cx('na')}>charset=</span><span className={cx('s')}>"UTF-8"</span> <span className={cx('nt')}>/&gt;</span><br />
              <span className={cx('nt')}>     &lt;title&gt;</span>Hello World!<span className={cx('nt')}>&lt;/title&gt;</span><br />
              <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/react.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
              <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/react-dom.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
              <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
              <span className={cx('nt')}> &lt;/head&gt;</span><br />
              <span className={cx('nt')}>&lt;body&gt;</span><br />
              <span className={cx('nt')}>     &lt;div</span> <span className={cx('na')}>id=</span><span className={cx('s')}>"example"</span><span className={cx('nt')}>&gt;&lt;/div&gt;</span><br />
              <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>type=</span><span className={cx('s')}>"text/babel"</span><span className={cx('nt')}>&gt;</span><br />
              <span className={cx('nx')}>       ReactDOM</span><span className={cx('p')}>.</span><span className={cx('nx')}>render</span><span className={cx('p')}>(</span><br />
              <span className={cx('o')}>          &lt;</span><span className={cx('nx')}>h1</span><span className={cx('o')}>&gt;</span><span className={cx('nx')}>Hello</span><span className={cx('p')}>,</span> <span className={cx('nx')}>world</span><span className={cx('o')}>!&lt;</span><span  className={cx('err')}>/h1&gt;,</span><br />
              <span className={cx('nb')}>             document</span><span className={cx('p')}>.</span><span className={cx('nx')}>getElementById</span><span className={cx('p')}>(</span><span className={cx('s1')}>'example'</span><span className={cx('p')}>)</span><br />
              <span className={cx('p')}>          );</span><br />
              <span className={cx('nt')}>     &lt;/script&gt;</span><br />
              <span className={cx('nt')}>&lt;/body&gt;</span><br />
              <span className={cx('nt')}>&lt;/html&gt;</span>
            </code></pre>
          </div>

          <h3> Seperate Your files </h3>

          <p>Your React JSX code can live in a separate file. Create the following components/hello.jsx </p>

            <div className={cx('highlight')}>

                <pre><code className={cx('language-javascript')} data-lang="javascript">
                <span className={cx('nx')}>  ReactDOM</span><span className={cx('p')}>.</span><span className={cx('nx')}>render</span><span className={cx('p')}>(</span>
                <span className={cx('hll')}><span className={cx('nx')}>     React</span><span className={cx('p')}>.</span><span className={cx('nx')}>createElement</span><span className={cx('p')}>(</span><span className={cx('s1')}>'h1'</span><span className={cx('p')}>,</span> <span class="kc">null</span><span className={cx('p')}>,</span> <span className={cx('s1')}>'Hello, world!'</span><span className={cx('p')}>),</span></span>
                  <span className={cx('nb')}>    document</span><span className={cx('p')}>.</span>
                <span className={cx('nx')}>getElementById</span><span className={cx('p')}>(</span><span className={cx('s1')}>'example'</span><span className={cx('p')}>)</span><br />
              <span className={cx('p')}>);</span>
            </code></pre>
          </div>


          <p> Update your HTML file as below: </p>
            <div className={cx('highlight')}>
              <pre><code className={cx('language-html')} data-lang="html"><span className={cx('cp')}>&lt;!DOCTYPE html&gt;</span><br />
              <span className={cx('nt')}>&lt;html&gt;</span><br />
              <span className={cx('nt')}>&lt;head&gt;</span><br />
              <span className={cx('nt')}>     &lt;meta</span> <span className={cx('na')}>charset=</span><span className={cx('s')}>"UTF-8"</span> <span className={cx('nt')}>/&gt;</span><br />
              <span className={cx('nt')}>     &lt;title&gt;</span>Hello React!<span className={cx('nt')}>&lt;/title&gt;</span><br />
              <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/react.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
              <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/react-dom.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
                <span className={cx('hll')}>    <span className={cx('c')}>&lt;!-- Es6 does not need Babel --&gt;</span></span>
              <span className={cx('nt')}> &lt;/head&gt;</span><br />
              <span className={cx('nt')}>&lt;body&gt;</span><br />
              <span className={cx('nt')}>     &lt;div</span> <span className={cx('na')}>id=</span><span className={cx('s')}>"example"</span><span className={cx('nt')}>&gt;&lt;/div&gt;</span><br />
              <span className={cx('hll')}>     <span className={cx('nt')}>&lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/hello.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
                </span>

              <span className={cx('nt')}>&lt;/body&gt;</span><br />
              <span className={cx('nt')}>&lt;/html&gt;</span>
            </code></pre>
            </div>

            <h3> Composing your components </h3>

              <p>Update your components in folders that only corrospond with that component Create the following components/messageComponents/message.jsx </p>

              <div className={cx('highlight')}>

                  <pre><code className={cx('language-javascript')} data-lang="javascript">
                  <span className={cx('cm-keyword')}>var</span><span className={cx('p')}> </span><span className={cx('nx')}>Message = React.createClass{'{'}</span><span className={cx('p')}>(</span>
                  <span className={cx('hll')}><span className={cx('nx')}>     render:</span><span className={cx('p')}> function()</span><span className={cx('nx')}> {'{'}</span></span>
                    <span className={cx('nb')}>    return</span><span className={cx('p')}> {'<div>'}Hello </span>
                  <span className={cx('nx')}>{'{this.props.message}</div>;'}</span><br />
                <span className={cx('p')}>{'  }'}</span><br />
                  <span className={cx('p')}>{'});'}</span><br />
                    <span className={cx('p')}>{'ReactDOM.render(<Message message="Hello" />, mountNode);'}</span>
              </code></pre>
            </div>

            <p> Create the following components/messageComponents/messageList.jsx. </p>

            <div className={cx('highlight')}>

                <pre><code className={cx('language-javascript')} data-lang="javascript">
                <span className={cx('cm-keyword')}>var</span><span className={cx('p')}> </span><span className={cx('nx')}>MessageList = React.createClass{'{'}</span><span className={cx('p')}>(</span>
                <span className={cx('hll')}><span className={cx('nx')}>     render:</span><span className={cx('p')}> function()</span><span className={cx('nx')}> {'{'}</span></span>
                  <span className={cx('nb')}>    return</span><span className={cx('p')}> {'<div>'}Hello </span>
                <span className={cx('nx')}>{'{this.props.name}</div>;'}</span><br />
              <span className={cx('p')}>{'  }'}</span><br />
                <span className={cx('p')}>{'});'}</span><br />
                  <span className={cx('p')}>{'ReactDOM.render(<MessageList />, mountNode);'}</span>
            </code></pre>
            </div>

            <h3> Import your modular components </h3>
              <p> Create the following components/messageComponents/messages.jsx. </p>

              <div className={cx('highlight')}>
                  <pre><code className={cx('language-javascript')} data-lang="javascript">
                    <span className={cx('cm-keyword')}>import</span><span className={cx('p')}> </span><span className={cx('nx')}>Message from {'components/messageComponents/message'}</span><br/>
                    <span className={cx('cm-keyword')}>import</span><span className={cx('p')}> </span><span className={cx('nx')}>MessageList from {'components/messageComponents/messageList'}</span><br/><br/>
                    <span className={cx('cm-keyword')}>var</span><span className={cx('p')}> </span><span className={cx('nx')}>Messages = React.createClass{'{'}</span><span className={cx('p')}>(</span><br/>
                    <span className={cx('p')}><span className={cx('nx')}>     render:</span><span className={cx('p')}> function()</span><span className={cx('nx')}>{'{'}</span></span><br/>
                    <span className={cx('nb')}>     return ( </span><br />
                    <span className={cx('p')}>           {'<div className="Messages">'} </span><br />
                    <span className={cx('hll')}>              {'<MessageList name="Jeff"/>;'} </span>
                    <span className={cx('hll')}>              {'<Message message="Hey there!"/>'} </span><br />
                    <span className={cx('p')}>           {'</div>'} </span><br />
                    <span className={cx('nb')}>           {')'} </span><br/>
                    <span className={cx('p')}>        {'}'}</span><br />
                    <span className={cx('p')}>{'});'}</span><br />
                    <span className={cx('p')}>{'ReactDOM.render(<Messages />, mountNode);'}</span>
              </code></pre>
              </div>

              <h3> Bring it all together </h3>

                <div className={cx('highlight')}>
                  <pre><code className={cx('language-html')} data-lang="html"><span className={cx('cp')}>&lt;!DOCTYPE html&gt;</span><br />
                  <span className={cx('nt')}>&lt;html&gt;</span><br />
                  <span className={cx('nt')}>&lt;head&gt;</span><br />
                  <span className={cx('nt')}>     &lt;meta</span> <span className={cx('na')}>charset=</span><span className={cx('s')}>"UTF-8"</span> <span className={cx('nt')}>/&gt;</span><br />
                  <span className={cx('nt')}>     &lt;title&gt;</span>Hello React!<span className={cx('nt')}>&lt;/title&gt;</span><br />
                  <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/react.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
                  <span className={cx('nt')}>     &lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"build/react-dom.js"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br />
                  <span className={cx('nt')}> &lt;/head&gt;</span><br />
                  <span className={cx('nt')}>&lt;body&gt;</span><br />
                  <span className={cx('nt')}>     &lt;div</span> <span className={cx('na')}>id=</span><span className={cx('s')}>"example"</span><span className={cx('nt')}>&gt;&lt;/div&gt;</span><br />
                  <span className={cx('hll')}>     <span className={cx('nt')}>&lt;script </span><span className={cx('na')}>src=</span><span className={cx('s')}>"components/messageComponents/messages.jsx"</span><span className={cx('nt')}>&gt;&lt;/script&gt;</span><br /></span>
                  <span className={cx('nt')}>&lt;/body&gt;</span><br />
                  <span className={cx('nt')}>&lt;/html&gt;</span>
                  </code></pre>
                </div>

        </div>

        <hr />
        { this.renderHeader() }
      </div>
    );
  }
}

Articles.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func
};

// Function passed in to `connect` to subscribe to Redux store updates.
// Any time it updates, mapStateToProps is called.
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// Connects React component to the redux store
// It does not modify the component class passed to it
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(Articles);
