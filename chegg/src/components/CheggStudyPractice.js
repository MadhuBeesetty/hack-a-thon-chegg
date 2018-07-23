import React, { Component } from 'react';

class CheggStudyPractice extends Component {
  render() {
    return (
      <div>
        <img className="pic2" src={require("./studyPracUp.png")} alt="studypic" />
        <img className="pic2" src={require("./studyPracdown.png")} alt="studydown" />
      </div>
    );
  }
}

export default CheggStudyPractice;
