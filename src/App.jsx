function App(){
  let count = 0;

  function increment(){
    count++;
    console.log("Value of count: ", count);
  }

  function decrement(){
    count--;
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