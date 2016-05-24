import React, { PropTypes } from 'react';
import TopicItem from 'components/TopicItem';
import classNames from 'classnames/bind';
import styles from 'scss/components/main-section';

const cx = classNames.bind(styles);

const MainSection = ({onIncrement, onDecrement, onDestroy, topics}) => {

  const topicItems = topics.map((topic, key) => {
    return (
      <TopicItem index={key}
        id={topic.id}
        key={key}
        text={topic.text}
        onDestroy={onDestroy} />);
    });

  return (
    <div className={cx('main-section')}>
      <h1 className={cx('main-section__header')}>Comments</h1>
      <ul className={cx('main-section__list')}>{topicItems}</ul>
    </div>
  );
};

MainSection.propTypes = {
  topics: PropTypes.array.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
