import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class AnswersAndMore extends Component {
  render() {
    console.log(this.props.QuestionsAll);
    return (
      <div>
        <h1>Answers and More</h1>
        <NavLink to='CheggStudyPractice'>
          <input type="submit" value="CheggStudyPractice" />
      </NavLink>
      </div>
    );
  }
}

export default AnswersAndMore;
