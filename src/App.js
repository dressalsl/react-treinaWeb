import React, { Component } from 'react';
import './App.css';

import Course from './components/Course';
import Form from './Form';


class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        courses: [
          {
            id:1,
            name: 'React',
            category: 'JavaScript',
            image: 'https://raw.githubusercontent.com/dressalsl/react-treinaWeb/master/src/img/React-icon.svg.png'
          },
          {
            id:2,
            name: 'Angular',
            category: 'JavaScript',
            image: 'https://raw.githubusercontent.com/dressalsl/react-treinaWeb/master/src/img/angular.png'
          }
        ]
      }
      this.remove = this.remove.bind(this);
  }

  remove(courseId){
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id == courseId);

    courses.splice(courseIndex, 1);
    this.setState({courses})
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
                onRemove={this.remove}
                />
                )
            }
        </ul>
        <Form />
      </div>
      );
  }
  
}

export default App;
