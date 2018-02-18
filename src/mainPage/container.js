import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTestResults } from './async';

import ClassListCards from './class/list/cards/container';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockClasses: ['CS2', 'CS3', 'CS4', 'CS5', 'CS6', 'CS7', 'CS8']
    };
  }
  componentDidMount() {
    // Get test data from airtable
    // this.props.getTestResults();
  }
  render() {
    console.log('card container', this.state.mockClasses);
    return (
      <div>
        <ClassListCards classes={this.state.mockClasses} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    testResults: state.mainStore.testResults
  };
};

export default connect(mapStateToProps, { getTestResults })(MainPage);
