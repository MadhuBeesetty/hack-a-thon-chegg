import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AnswersAndMore extends Component {
  getImage(idx) {
    return <img className="pic2" src={require(`./Answers/${idx}.png`)} alt={`ans${idx}`} />
  }

  render() {
    return (
      <div>
        <div>
            <input className="button" type="submit" value="signIn" />
          </div>
        <img className="pic4" src={require('./AnswersTop.png')} alt="answertop" />
        {/*
        <div className="dropdown">
          <button className="dropbtn">Thomas'Calculus(14th Ed.)</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
      </div>
       */}
      <div>
        {this.props.QuestionsAll.map((each, index) => {
          return(
            <div className="marginBorder" key={index} >
              <p className="question" >Problem {each.questionNumber}:</p>
              <details>
                <summary className="answer" >question:{each.question}</summary>
                {this.getImage(index + 1)}
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
