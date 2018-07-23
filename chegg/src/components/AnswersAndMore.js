import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AnswersAndMore extends Component {
  render() {
    console.log(this.props.QuestionsAll);
    return (
<div>
  <img className="pic1" src={require('./AnswersTop.png')} alt="answertop" />
  
      <div>
         {this.props.QuestionsAll.map((each) => {
          return(
            <div className="marginBorder" >
            <p className="question" >Problem {each.questionNumber}:</p>
            <p>question:{each.question}</p>
            <p>answer:{each.answer}</p>
        </div>
          )
        })
        }
        <NavLink to='CheggStudyPractice'>
          <input className="button" type="submit" value="CheggStudyPractice" />
      </NavLink>
      </div>
      <img className="pic2" src={require('./AnswersDown.png')} alt="answerdown" />
</div>
    );
  }
}

export default AnswersAndMore;
