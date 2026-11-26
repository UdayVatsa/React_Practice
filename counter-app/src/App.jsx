import { useEffect, useState } from "react";

function App(){
  let [count,setCount] = useState(0);

  useEffect(() => {
    console.log('The count is: ', count);
  }, [count])

  function increment(){
    setCount(count+1);
    
  }

  function decrement(){
    setCount(count-1);
    
  }

  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
export default App