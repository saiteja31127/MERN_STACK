import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>Header - Course: {props.course} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>Content - Part Name: {props.p1} and Exercises: {props.ex1} </p>
      <p>Content - Part Name: {props.p2} and Exercises: {props.ex2} </p>
      <p>Content - Part Name: {props.p3} and Exercises: {props.ex3} </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total - total: {props.total} </p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <div>
      <Header course={course} />
      <Content p1 = {part1} ex1 = {exercises1} p2 = {part1} ex2 = {exercises1} p3 = {part1} ex3 = {exercises1} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App