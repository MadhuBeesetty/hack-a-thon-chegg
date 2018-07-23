import React, { Component } from 'react';

class QuestionsDisplay extends Component {
  render() {
    console.log(this.props.QuestionsMain);
    return (
      <div>
        {this.props.QuestionsMain.map((each) => {
          return(
            <div>
            <p className="question" >Problem {each.questionNumber}:</p>
            <p>question:{each.question}</p>
            <p>Answer:{each.answer}</p>
        </div>
          )
        })
        }
      </div>
    );
  }
}

export default QuestionsDisplay;
