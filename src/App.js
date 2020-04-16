import React, { Component } from 'react';
import './App.css';

import { CourseService } from './services/CourseService';
import { CategoryService } from './services/CategoryService';

import Course from './components/Course';
import NewCourseFrom from './components/NewCourseForm';
import { promises } from 'dns';
// import Form from './Form';
// import Form2 from './Form2';


class App extends Component {

  constructor(props){
    super(props);
      this.state = {
        courses: [],
        categories: []
      }
      this.startData = this.startData.bind(this);
      this.add = this.add.bind(this);
      this.remove = this.remove.bind(this);
      
      this.startData();
    }

  async startData(){
     
    const [courses,categories] = await Promise.all([
      CourseService.list(),
      CategoryService.list()
    ])

    this.setState({
      courses,
      categories
    })
  }

  async add(course){
    const {courses} = this.state,
      newCourse = await CourseService.create(course);
    courses.push(newCourse);
    this.setState({courses});
  }

  async remove(courseId){
    const { courses } = this.state,
      courseIndex = courses.findIndex(course => course.id == courseId); //== antes

    await CourseService.remove(courseId); 
    courses.splice(courseIndex, 1);
    this.setState({courses})
  }

  render() {
    const { state } = this;
    return( 
      <div className="App">
        <NewCourseFrom onSubmit={this.add} categories={state.categories}/>
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
        {/* <Form />
        <Form2 /> */}
      </div>
      );
  }
  
}

export default App;

// serv npm tw-dev-server
// https://treinaweb.github.io/tw-dev-server/
// https://github.com/treinaweb/treinaweb-react-introducao