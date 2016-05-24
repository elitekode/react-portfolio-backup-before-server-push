import React from 'react';

import classNames from 'classnames/bind';
import styles from 'scss/components/about';

const cx = classNames.bind(styles)


var Alert = require('react-bootstrap').Alert;
/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Dashboard = props => <div>Categories</div>;

export default Dashboard;
