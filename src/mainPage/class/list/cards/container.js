import React, { Component } from 'react';
import ClassListCardsPresentation from './presentation';

class ClassListCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <ClassListCardsPresentation {...this.props} />;
  }
}

export default ClassListCards;
