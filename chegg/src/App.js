import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import QuestionsDisplay from './components/QuestionDisplay';
import CheggStudyPractice from './components/CheggStudyPractice';
import AnswersAndMore from './components/AnswersAndMore';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      QuestionsMain: [ { questionNumber: 0, question: 'madhu', answer: 'answer1' },
        { questionNumber: 1, question: 'sudhan', answer: 'answer2' },
        { questionNumber: 2, question: 'beesetty', answer: 'answer3' } ],
      questionaAll: [ { questionNumber: 0, question: 'madhu', answer: 'answer1' },
        { questionNumber: 1, question: 'sudhan', answer: 'answer2' },
        { questionNumber: 2, question: 'beesetty', answer: 'answer3' },
        { questionNumber: 3, question: 'extraQuestion', answer: 'answer4' },
        { questionNumber: 4, question: 'extraQuestion1', answer: 'answer5' }],
    }
  }

  render() {
    return (
      <div>
        <img className="pic1" src={require('./Screen Shot 2018-07-21 at 8.26.20 PM.png')} alt="starting" />
        <QuestionsDisplay QuestionsMain={this.state.QuestionsMain} />
        <input type="submit" value="Answers & More" />
        <CheggStudyPractice />
        <AnswersAndMore questionaAll={this.state.questionaAll} />
        <img className="pic2" src={require('./chegg down pic.png')} alt="ending" />
      </div>
    );
  }
}

export default App;
