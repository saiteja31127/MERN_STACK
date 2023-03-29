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
      <Part p = {props.p1} ex = {props.ex1} />
      <Part p = {props.p2} ex = {props.ex2} />
      <Part p = {props.p3} ex = {props.ex3} />
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
      <Content p1 = {part1} ex1 = {exercises1} p2 = {part2} ex2 = {exercises2} p3 = {part3} ex3 = {exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App