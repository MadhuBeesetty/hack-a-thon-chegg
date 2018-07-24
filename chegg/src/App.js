import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import CheggStudyPractice from './components/CheggStudyPractice';
import AnswersAndMore from './components/AnswersAndMore';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      questionsAll: [ { questionNumber: 1, question: 'madhu', answer: 'answer1' },
        { questionNumber: 2, question: 'sudhan', answer: 'answer2' },
        { questionNumber: 3, question: 'beesetty', answer: 'answer3' },
        { questionNumber: 4, question: 'extraQuestion', answer: 'answer4' },
        { questionNumber: 5, question: 'extraQuestion1', answer: 'answer5' }],
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
