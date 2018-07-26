import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AnswersAndMore extends Component {
  constructor(){
    super();
    this.state={
      registered: false,
    }
  }

  register = () => {
    this.setState({registered:true})
  };

  getImage(idx) {
    if(this.state.registered === true){
      return <img className="AnswerImage" src={require(`./Answers/${idx}.png`)} alt={`ans${idx}`} />
    }else{
      return <h1 className="design" >Please signIn to view best solutions for all questions </h1>
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <input className="button" type="submit" value="signIn" onClick={this.register} />
        </div>
        <img className="pic4" src={require('./AnswersTop.png')} alt="answertop" />
        <div>
          {this.props.QuestionsAll.map((each, index) => {
            return(
              <div className="marginBorder" key={index} >
                <p className="question" >Problem {each.questionNumber}:</p>
                <details>
                  <summary className="answer" >question:{each.question}</summary>
                  {this.getImage(index + 1)}
                </details>
              </div>
            )
          })
          }
          <NavLink to='CheggStudyPractice'>
            <input className="button" type="submit" value="CheggStudyPractice" />
          </NavLink>
        </div>
        <img className="pic2" src={require('./chegg down pic.png')} alt="answerdown" />
      </div>
    );
  }
}

export default AnswersAndMore;
