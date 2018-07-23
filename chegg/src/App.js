import React, { Component } from 'react';
import { BrowserRouter, Router, NavLink, Route } from 'react-router-dom';

import Main from './components/Main';
import CheggStudyPractice from './components/CheggStudyPractice';
import AnswersAndMore from './components/AnswersAndMore';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      questionsAll: [ { questionNumber: 0, question: 'madhu', answer: 'answer1' },
        { questionNumber: 1, question: 'sudhan', answer: 'answer2' },
        { questionNumber: 2, question: 'beesetty', answer: 'answer3' },
        { questionNumber: 3, question: 'extraQuestion', answer: 'answer4' },
        { questionNumber: 4, question: 'extraQuestion1', answer: 'answer5' }],
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <switch>
            <Route path='/'
              render= {() => <Main />}
              exact />
            <Route path='/AnswersAndMore'
              render = { () => <AnswersAndMore 
              QuestionsAll={this.state.questionsAll}
                  />}
              exact />
        <Route path='/CheggStudyPractice'
          render = { () => <CheggStudyPractice />}
          exact />
    </switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
