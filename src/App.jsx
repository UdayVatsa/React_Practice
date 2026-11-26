import { useState } from "react";

function App(){
  let [count,setCount] = useState(0);

  function increment(){
    setCount(count+1);
    console.log("Value of count: ", count);
  }

  function decrement(){
    setCount(count-1);
    console.log("Value of count: ", count);
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