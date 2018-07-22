import React, { Component } from 'react';

import QuestionDisplay from './components/QuestionDisplay';
import CheggStudyPractice from './components/CheggStudyPractice';
import AnswersAndMore from './components/AnswersAndMore';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <img className="pic1" src={require('./Screen Shot 2018-07-21 at 8.26.20 PM.png')} />
        <QuestionDisplay />
        <CheggStudyPractice />
        <AnswersAndMore />
        <img className="pic2" src={require('./chegg down pic.png')} />
      </div>
    );
  }
}

export default App;
