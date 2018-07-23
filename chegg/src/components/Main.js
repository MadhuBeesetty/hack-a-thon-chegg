import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import QuestionsDisplay from './QuestionDisplay';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      QuestionsMain: [ { questionNumber: 0, question: 'madhu', answer: 'answer1' },
        { questionNumber: 1, question: 'sudhan', answer: 'answer2' },
        { questionNumber: 2, question: 'beesetty', answer: 'answer3' } ],
    }
  }

  render() {
    return (
      <div>
        <img className="pic1" src={require('./Screen Shot 2018-07-21 at 8.26.20 PM.png')} alt="starting" />
        <QuestionsDisplay QuestionsMain={this.state.QuestionsMain} />
        <NavLink to='/AnswersAndMore'>
          <input type="submit" value="Answers and More" />
        </NavLink>
        <img className="pic2" src={require('./chegg down pic.png')} alt="ending" />
      </div>
    );
  }
}

export default Main;
