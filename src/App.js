import React, { Component } from 'react';
import './App.css';

import Course from './components/Course';

class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        courses: [
          {
            name: 'React',
            category: 'JavaScript',
            image: 'src/img/React-icon.svg.png'
          },
          {
            name: 'Angular',
            category: 'JavaScript',
            image: 'src/img/angular.png'
          }
        ]
      }
  }

  render() {
    const { state } = this;
    return( 
      <div className="App">
        <ul className="couses-list">
            {
              state.courses.map(
                course => <Course 
                course={course}
                />
                )
            }
        </ul>
      </div>
      );
  }
  
}

export default App;
