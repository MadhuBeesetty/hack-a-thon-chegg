import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './components/Main';
import CheggStudyPractice from './components/CheggStudyPractice';
import AnswersAndMore from './components/AnswersAndMore';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      questionsAll: [ { questionNumber: '2P', question: 'If the magnitude of the resultant force is to be 500 N, directed along the positive y axis, determine the magnitude of force F and its direction Œ∏ .' },
        { questionNumber: '1EP', question: 'Determine the magnitude of the resultant force acting on the screw eye and its direction measured clockwise from the x axis.'},
        { questionNumber: '7P', question: 'Determine the magnitude of the resultant force F R = F 1 + F 2 and its direction, measured counterclockwise from the positive x axis.' },
        { questionNumber: '1P', question: 'If Œ∏ = 60¬∞and F = 450 N, determine the magnitude of the resultant force and its direction, measured counterclockwise from the positive x axis.' },
        { questionNumber: '3FP', question: 'Two forces act on the hook. Determine the magnitude of the resultant force.'},
        { questionNumber: '2PP', question: 'Determine the magnitude of the resultant force and its direction measured counterclockwise from the positive x axis.'},
        { questionNumber: '8P', question: 'Resolve the force F 2 into components acting along the u and v axes and determine the magnitudes of the components.'},
        { questionNumber: '1B', question: 'The vertical force F acts downward at A on the twomembered frame. Determine the magnitudes of the two components of F directed along the axes of AB and AC . Set F = 500 N.'}
      ],
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <switch>
            <Route path='/'
              render= {() => <Main />}
              exact />
            <Route path='/AnswersAndMore'
              render = { () => <AnswersAndMore 
              QuestionsAll={this.state.questionsAll}
                  />}
              exact />
        <Route path='/CheggStudyPractice'
          render = { () => <CheggStudyPractice />}
          exact />
    </switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
