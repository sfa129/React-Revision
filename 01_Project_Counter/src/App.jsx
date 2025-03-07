import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <h2>Value of Counter: {counter}</h2>
      <button style={{ padding: "10px 20px" }} onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button style={{ padding: "10px 20px" }} onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
