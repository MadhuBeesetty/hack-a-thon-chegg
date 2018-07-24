import React, { Component } from 'react';

class QuestionsDisplay extends Component {
  constructor(){
    super();
    this.state={
    isShown:false,
    }
  }

  check = () => {
    const {isShown} = this.state;
    this.setState({
    isShown: !isShown
    })
  };

  answerFun = (each) => {
    if(this.state.isShown === true){
    <p className="background" >Answer:{each.answer}</p>
    }else{null}
 }

  render() {
    console.log(this.props.QuestionsMain);
    return (
      <div>
        {this.props.QuestionsMain.map((each,index) => {
          return(
            <div className="marginBorder" key={index} >
            <p className="question" >Problem {each.questionNumber}:</p>
            <p onClick={this.check}>question:{each.question}</p>
            {this.answerFun(each)}
        </div>
          )
        })
        }
      </div>
    );
  }
}

export default QuestionsDisplay;
