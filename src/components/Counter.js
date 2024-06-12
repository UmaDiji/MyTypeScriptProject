import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const IncFnc = ()=>{
        setCount(count+1)
    }

    const DecFnc = ()=>{
        setCount(count-1)
    }
  return (
    <>
    <h1>Count: {count}</h1>
    <button type='button' onClick={IncFnc}>Increment</button>
    <button type='button' onClick={DecFnc}>Decrement</button>
    </>
  )
}

export default Counter
