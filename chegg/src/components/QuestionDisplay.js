import React, { Component } from 'react';

class QuestionsDisplay extends Component {

  render() {
    return (
      <div>
        {this.props.QuestionsMain.map((each,index) => {
          return(
            <div className="marginBorder" key={index} >
              <p className="question" >Problem {each.questionNumber}:</p>
              <p className="answer" >{each.question}</p>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default QuestionsDisplay;
