import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name} your age is {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = "peter"
  const age = 10
  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="george" age={10+5}/>
      <Hello name={name} age={age}></Hello>
    </div>
  )
}

export default App