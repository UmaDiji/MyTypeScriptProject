import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const IncFnc = ()=>{
        setCount(count+1)
    }
  return (
    <>
    <h1>Count: {count}</h1>
    <button type='button' onClick={IncFnc}>Increment</button>
    </>
  )
}

export default Counter
