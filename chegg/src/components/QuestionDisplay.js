import React, { Component } from 'react';

class QuestionsDisplay extends Component {

  render() {
    return (
      <div>
        {this.props.QuestionsMain.map((each,index) => {
          return(
            <div className="marginBorder" key={index} >
              <p className="question" >Problem {each.questionNumber}:</p>
              <details>
                <summary className="answer" >question:{each.question}</summary>
                <p className="background" >Answer:{each.answer}</p>
              </details>
            </div>
          )
        })
        }
      </div>
    );
  }
}

export default QuestionsDisplay;
