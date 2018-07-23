import React, { Component } from 'react';

class QuestionsDisplay extends Component {
  render() {
    console.log(this.props.QuestionsMain);
    return (
      <div>
        {this.props.QuestionsMain.map((each) => {
          return(
            <div>
            <p>Problem {each.questionNumber}:</p>
            <p>{each.question}</p>
            <p>{each.answer}</p>
        </div>
          )
        })
        }
      </div>
    );
  }
}

export default QuestionsDisplay;
