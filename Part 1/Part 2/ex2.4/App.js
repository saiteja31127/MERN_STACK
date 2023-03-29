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
      {props.parts.map(part =>
        <Part p = {part.name} ex = {part.exercises} />
      )}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce(function(sum, parts) { return sum + parts.exercises }, 0)
  return (
    <div>
      <p>Total - total: {total} </p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course[0].name} />
      <Content parts={props.course[0].parts} />
      <Total parts={props.course[0].parts} />
      <Header course={props.course[1].name} />
      <Content parts={props.course[1].parts} />
      <Total parts={props.course[1].parts} />
    </div>
  )
}

const App = () => {

  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      <h1> Web Development Curiculum </h1>
      <Course course={course} />
    </div>
  )
}

export default App