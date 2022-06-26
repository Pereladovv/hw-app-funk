import { useState } from 'react'

function DoubleIncreaser() {
  const [count, setCount] = useState(0)

  const doubleIncreaseHandler = () => {
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={doubleIncreaseHandler}>
        Double Increase
      </button>
      <div>Count: {count}</div>
    </>
  )
}
export default DoubleIncreaser;