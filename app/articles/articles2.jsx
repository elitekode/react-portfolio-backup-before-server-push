import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { manualLogin, signUp, toggleLoginMode } from 'actions/users';
import styles from 'scss/components/login';
import hourGlassSvg from 'images/hourglass.svg';


import Votes from '../containers/Vote';


const cx = classNames.bind(styles);

class Articles2 extends Component {
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
          <h1>Digging deeper with redux. Working with states before hand.</h1>
          <hr />
          <p>Redux is on its way by letting you know your states before they happen.<br />React abstracts away the DOM from you, giving a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native.<br/>React implements one-way reactive data flow which reduces boilerplate and is easier to reason about than traditional data binding.</p>
        </div>
        <hr />
            { this.renderHeader() }
      </div>
    );
  }
}

Articles2.propTypes = {
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
export default connect(mapStateToProps)(Articles2);
