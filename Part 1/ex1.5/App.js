import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>Header - Course: {props.course} </p>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>Content - Part - Part Name: {props.p} and Exercises: {props.ex} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p = {props.parts[0].name} ex = {props.parts[0].exercises} />
      <Part p = {props.parts[1].name} ex = {props.parts[1].exercises} />
      <Part p = {props.parts[2].name} ex = {props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total - total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App