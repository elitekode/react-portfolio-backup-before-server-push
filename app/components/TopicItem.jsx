import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'scss/components/topic-item';

const cx = classNames.bind(styles);

export default class TopicItem extends Component {
  constructor(props) {
    super(props);
    this.onDestroyClick = this.onDestroyClick.bind(this);
  }


  onDestroyClick() {
    const { id, index, onDestroy } = this.props;
    onDestroy(id, index);
  }

  render() {
    return (
      <li className={cx('topic-item')} key={this.props.id}>
        <span className={cx('topic-item__topic')}>{this.props.text}</span>
       
        <button className={
          cx('topic-item__button', 'topic-item__button--destroy')
        } onClick={this.onDestroyClick}>{String.fromCharCode(215)}</button>
      </li>
    );
  }
}

TopicItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onDestroy: PropTypes.func.isRequired
};
