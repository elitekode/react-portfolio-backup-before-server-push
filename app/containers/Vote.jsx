import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';
import {
  createTopic, typing,
   destroyTopic, fetchTopics } from 'actions/topics';
import styles from 'scss/components/vote';

const cx = classNames.bind(styles);

class Vote extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRending() method
  static need = [
    fetchTopics
  ]

  constructor(props) {
    super(props);
    // event handlers for MainSection component

    this.onDestroy = this.onDestroy.bind(this);
    // event handlers for EntryBox component
    this.onEntryChange = this.onEntryChange.bind(this);
    this.onEntrySave = this.onEntrySave.bind(this);
  }

  onDestroy(id, index) {
    const { dispatch } = this.props;
    dispatch(destroyTopic(id, index));
  }

  onEntryChange(text) {
    const { dispatch } = this.props;
    dispatch(typing(text));
  }

  onEntrySave(text) {
    const { dispatch } = this.props;
    dispatch(createTopic(text));
  }


  // <Scoreboard topics={topics} />


  render() {
    const {newTopic, topics} = this.props;
    return (
      <div className={cx('vote')}>
        <EntryBox topic={newTopic}
          onEntryChange={this.onEntryChange}
          onEntrySave={this.onEntrySave} />
        <MainSection topics={topics}
          onDestroy={this.onDestroy} />
      </div>
    );
  }
}

Vote.propTypes = {
  topics: PropTypes.array.isRequired,
  newTopic: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    topics: state.topic.topics,
    newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps)(Vote);
