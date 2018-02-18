import React, { Component } from 'react';
import StudentPresentation from './presentation';

import { connect } from 'react-redux';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockAssignments: ['Introduction to Git', 'Introduction to JS', 'JS II', 'JS III', 'JS IV']
    };
  }
  render() {
    return (
      <div>
        <StudentPresentation student={this.props.student} assignments={this.state.mockAssignments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    student: state.routerReducer.params.student
  }
}

export default connect(mapStateToProps, null)(Student);
