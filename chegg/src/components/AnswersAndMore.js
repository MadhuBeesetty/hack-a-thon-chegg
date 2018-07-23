import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AnswersAndMore extends Component {
  render() {
    console.log(this.props.QuestionsAll);
    return (
      <div>
         {this.props.QuestionsAll.map((each) => {
          return(
            <div>
            <p className="question" >Problem {each.questionNumber}:</p>
            <p>question:{each.question}</p>
            <p>answer:{each.answer}</p>
        </div>
          )
        })
        }
        <NavLink to='CheggStudyPractice'>
          <input type="submit" value="CheggStudyPractice" />
      </NavLink>
      </div>
    );
  }
}

export default AnswersAndMore;
