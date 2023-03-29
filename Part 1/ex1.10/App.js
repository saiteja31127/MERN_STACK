import React, { useState, useEffect } from 'react'

const Statistic = (props) => {
  return (
    <div>
      {props.text}: {props.value} <br/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>
        <h1> Statistics </h1>
        No feedback given
      </div>
    )
  }
  return (
  <div>
  <h1> Statistics </h1>
  <Statistic text="Good" value ={props.good} />
  <Statistic text="Neutral" value ={props.neutral} />
  <Statistic text="Bad" value ={props.bad} />
  <Statistic text="Average" value ={props.average} />
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0.0)
  const [positive, setPositive] = useState(0.0)

  const increaseGood = () => {
    console.log('Good Button Clicked')
    setGood(good+1)
  }

  const increaseNeutral = () => {
    console.log('Neutral Button Clicked')
    setNeutral(neutral+1)
  }

  const increaseBad = () => {
    console.log('Bad Button Clicked')
    setBad(bad+1)
  }

  useEffect(() => {
    console.log('Triggering Hooks')
    setAll(good+neutral+bad)
    setAverage((good-bad)/all)
    setPositive((good/all)*100)
  }, [good, neutral, bad, all])

  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick={increaseGood}>Good</button> 
      <button onClick={increaseNeutral}>Neutral</button> 
      <button onClick={increaseBad}>Bad</button> <br/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App