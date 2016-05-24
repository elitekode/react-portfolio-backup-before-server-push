import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from 'actions/users';
import styles from 'scss/components/login';
import hourGlassSvg from 'images/hourglass.svg';

import Votes from '../containers/Vote';

const cx = classNames.bind(styles);

class Articles1 extends Component {
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

     if (isLogin) {
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
          <h1>Hack can make PHP run up to 20x faster</h1>
          <hr />
          <p>With alot of developers deveoted to php and have loved the procedural proccess to te language hack allows for php to keep up with all the big new ways to handle your server side processes like node.js.<br/>{"Hack's"} most basic feature is type annotations. Typing of objects have been around since PHP5, and PHP7 offers scalar typing as well. Hack provides across the board type annotations, in conjunction with fast, ahead-of-time static verification with its typechecker.</p>
        </div>

        <h2> Getting Started:Linux </h2>
        <p> First you need to install HHVM which is required to run hack and its type-checker</p>
          <h2 className={cx('headingWithAnchor')}>Ubuntu 14.04 Trusty<a href="#ubuntu-14.04-trusty"><i className={cx('glyphIcon fa fa-link')}></i></a></h2>

            <div className={cx('highlight highlight highlight-php')}><pre><span className={cx('x')}># installs add-apt-repository</span>
              <span className={cx('x')}>sudo apt-get install software-properties-common</span>
              <span className={cx('x')}>sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0x5a16e7281be7a449</span>
              <span className={cx('x')}>sudo add-apt-repository "deb http://dl.hhvm.com/ubuntu $(lsb_release -sc) main"</span>
              <span className={cx('x')}>sudo apt-get update</span>
              <span className={cx('x')}>sudo apt-get install hhvm</span>
            </pre></div>

            <h2 className={cx('headingWithAnchor')}>Debian 7 Wheezy<a href="#ubuntu-14.04-trusty"><i className={cx('glyphIcon fa fa-link')}></i></a></h2>

              <div className={cx('highlight highlight highlight-php')}><pre><span className={cx('x')}># installs add-apt-repository</span>
                <span className={cx('x')}>{'sudo apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0x5a16e7281be7a449'}</span>
                <span className={cx('x')}>{'echo deb http://dl.hhvm.com/debian wheezy main | sudo tee /etc/apt/sources.list.d/hhvm.list'}</span>
                <span className={cx('x')}>sudo apt-get update</span>
                <span className={cx('x')}>sudo apt-get install hhvm</span>
              </pre></div>

            <h2 className={cx('headingWithAnchor')}>Mac: experimental<a href="#ubuntu-14.04-trusty"><i className={cx('glyphIcon fa fa-link')}></i></a></h2>

                <div className={cx('highlight highlight highlight-php')}><pre>
                  <span className={cx('x')}>brew tap hhvm/hhvm</span>
                  <span className={cx('x')}>sbrew install hhvm</span>
                </pre></div>

              <h2 className={cx('headingWithAnchor')}>Test HHVM<a href="#ubuntu-14.04-trusty"><i className={cx('glyphIcon fa fa-link')}></i></a></h2>

              <p>After installing HHVM, change to the directory where your code lives, and start up HHVM:</p>

                <div className={cx('bash')}>
                  <pre>
                    <span className={cx('hll')}>hhvm -m server -p 8080</span><br />
                  </pre>
              </div>
              <p>Once you have HHVM running, write a simple "Hello World" program named hello.php:</p>

                <div className={cx('php')}>
                  <pre>
                    <span className={cx('hll')}>{"<?hh"}</span>
                    <span className={cx('hll')}>  echo "Hello World!";</span><br />
                  </pre>
              </div>

              <p> Now your local environment will be on {"http://localhost:8080/hello.php"} in your browser </p>

            <p>Learn more about <a href="/hack/getting-started/getting-started">Hack</a> and I highly recommend the <a href="http://www.amazon.com/Hack-HHVM-Programming-Productivity-Breaking/dp/1491920874/">OReilly book on HHVM and Hack</a>, written by an engineer on the HHVM team at Facebook. Hack has an <a href="http://hacklang.org/tutorial/">online interactive tutorial</a> as well.</p>


        <hr />
            { this.renderHeader() }
      </div>
    );
  }
}

Articles1.propTypes = {
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
export default connect(mapStateToProps)(Articles1);
