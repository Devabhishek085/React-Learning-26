import React, {useState } from 'react'

const App = () => {
    let [counter,setcounter]=useState(1);

    // let counter=20;
    const addvalue=()=>{
        if (counter<20) {
            setcounter(counter+1)
        }
    }
    const removevalue=()=>{
        setcounter(counter-1);
        if (counter<=0) {
            setcounter(counter)
        }
    }
  return (
    <div>
        <h1>This is my React App</h1>
        <br />
        <h2>Counter Value : {counter}</h2>
        <br />
        <button onClick={addvalue}>Add Value</button>
        <br />
        <button onClick={removevalue}>Remove Value</button>
    </div>
  )
}

export default App