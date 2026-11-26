import { useEffect, useState } from "react"


function Message() {
  useEffect(() => {
    console.log("Message is mounted");
    return () => {
      console.log("Message is unmounted");
    }
  }, [])

  return <h2>Hello World</h2>
}


function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow(!show);
  }


  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {show && <Message />}
    </div>
  )
}
export default App