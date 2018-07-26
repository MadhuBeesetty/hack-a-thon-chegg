import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import QuestionsDisplay from './QuestionDisplay';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      QuestionsMain: [ { questionNumber: 1, question: 'madhu', answer: 'Chegg, Inc. is an American education technology company based in Santa Clara, California, that used to specialize in online textbook rentals (both in physical and digital formats), and has moved into homework help, online tutoring, scholarships and internship matching. It is meant to help students in high school and college. It also owns citation services EasyBib, Citation Machine, BibMe, and Cite This For Me. The company was created in the United States by three Iowa State University students in 2001 and was founded by entrepreneur Aayush Phumbhra.[2] The name Chegg is a portmanteau of the words chicken and egg, based on the founders experience after graduating from college; they could not land a job without experience, but could not get experience without a job.[3]' },
        { questionNumber: 2, question: 'sudhan', answer: 'answer2' },
        { questionNumber: 3, question: 'beesetty', answer: 'answer3' } ],
    }
  }

  render() {
    return (
      <div>
        <img className="pic1" src={require('./QuestionTop.png')} alt="starting" />
        <img className="pic3" src={require('./Review.png')} />
        <QuestionsDisplay QuestionsMain={this.state.QuestionsMain} />
        <NavLink to='/AnswersAndMore'>
          <input className="button" type="submit" value="Answers and More" />
        </NavLink>
        <img className="pic2" src={require('./chegg down pic.png')} alt="ending" />
      </div>
    );
  }
}

export default Main;
