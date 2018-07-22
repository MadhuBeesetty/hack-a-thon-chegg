import React, { Component } from 'react';

import QuestionDisplay from './components/QuestionDisplay';
import CheggStudyPractice from './components/CheggStudyPractice';
import AnswersAndMore from './components/AnswersAndMore';

class App extends Component {
  render() {
    return (
      <div>
        <QuestionDisplay />
        <CheggStudyPractice />
        <AnswersAndMore />
      </div>
    );
  }
}

export default App;
