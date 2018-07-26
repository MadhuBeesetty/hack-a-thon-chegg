import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import QuestionsDisplay from './QuestionDisplay';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      QuestionsMain: [ { questionNumber: '2P' , question: 'If the magnitude of the resultant force is to be 500 N, directed along the positive y axis, determine the magnitude of force F and its direction Œ∏ .' },
        { questionNumber: '1EP' , question: 'Determine the magnitude of the resultant force acting on the screw eye and its direction measured clockwise from the x axis.' },
        { questionNumber: '7P' , question: 'Determine the magnitude of the resultant force F R = F 1 + F 2 and its direction, measured counterclockwise from the positive x axis.' } ],
    }
  }

  render() {
    return (
      <div>
        <img className="pic1" src={require('./QuestionTop.png')} alt="starting" />
        <h1 className="design" >Most Viewed Questions</h1>
        <QuestionsDisplay QuestionsMain={this.state.QuestionsMain} />
        <NavLink to='/AnswersAndMore'>
          <input className="button" type="submit" value="Answers and More Questions" />
        </NavLink>
        <img className="pic2" src={require('./chegg down pic.png')} alt="ending" />
      </div>
    );
  }
}

export default Main;
