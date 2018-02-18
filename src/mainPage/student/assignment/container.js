import React, { Component } from 'react';
import StudentAssignmentPresentation from './presentation';

class StudentAssignment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mockAssignments: ['Introduction to Git', 'Introduction to JS', 'JS II', 'JS III', 'JS IV']
    };
  }
  render() {
    return (
      <div>
        <StudentAssignmentPresentation assignments={this.state.mockAssignments} />
      </div>
    );
  }
}

export default StudentAssignment;
