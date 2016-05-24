import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from 'actions/users';

import classNames from 'classnames/bind';
import styles from 'scss/components/navigation';

const cx = classNames.bind(styles);

const Navigation = ({user, dispatch}) => {
    return (
      <nav className={styles.navigation} role="navigation">
        <Link to="/"
          className={cx('navigation__item', 'navigation__item--logo')}
          >Kochan Desai</Link>
          { user.authenticated ? (
            <Link onClick={()=> dispatch(logOut())}
              className={styles.navigation__item} to="/">Logout</Link>
          ) : (
          <button className={styles.buttonNav} to="/login">
            <Link to="/login" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>Login</Link>
          </button>
          )}
            { user.authenticated ? (
              <Link className={styles.navigation__item} to="/postTopic" activeClassName={styles['navigation__item--active']}>Post A Topic</Link>
            ): (
            <Link to=""></Link>
            )}
            <Link to="/about" className={styles.navigation__item} activeClassName={styles['navigation__item--active']}>About</Link>
            <Link className={styles.navigation__item} to="/hire" activeClassName={styles['navigation__item--active']}>Hire Me</Link>
            <Link className={styles.navigation__item} to="/tags" activeClassName={styles['navigation__item--active']}>Projects</Link>

      </nav>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Navigation);
