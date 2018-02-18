import React, {
  Component
} from 'react';

import StudentPresentation from './studentPresentation';
import AssignmentPresentation from './assignmentPresentation';

import {
  connect
} from 'react-redux';

class Class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assignments: ['Introduction to Git', 'Introduction to JS', 'JS II', 'JS III', 'JS IV'],
      students: ['Ryan Lowe']
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     class: this.props.match.params.className;
  //   });
  // }

  render() {
    return (
      <div>
        <StudentPresentation class={this.props.class} students={this.state.mockStudents} />;
        <AssignmentPresentation assignments={this.state.mockAssignments} />;
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    class: state.routerReducer.params.class
  };
}

export default connect(mapStateToProps, null)(Class);
