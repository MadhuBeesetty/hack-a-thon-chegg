import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AnswersAndMore extends Component {
  render() {

    return (
      <div>
        <img className="pic1" src={require('./AnswersTop.png')} alt="answertop" />
        <div class="dropdown">
  <button class="dropbtn">Thomas'Calculus(14th Ed.)</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
        <div>
          {this.props.QuestionsAll.map((each, index) => {
            return(
              <div className="marginBorder" key={index} >
                <p className="question" >Problem {each.questionNumber}:</p>
                <details>
                  <summary>question:{each.question}</summary>
                  <p className="background" >answer:{each.answer}</p>
                </details>
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
