Initial render
Step 1: App executes
const [show, setShow] = useState(true)


React initializes show to true.

Step 2: React evaluates the JSX
{show && <Message />}


Since show is true, the expression evaluates to:
<Message />


This tells React that it needs to render the Message component.

Step 3: Message executes

React calls the Message component.

First, it encounters:
useEffect(() => {
  console.log("Message mounted!")

  return () => {
    console.log("Message unmounted!")
  }
}, [])


Here's the important distinction:
- The Effect callback executes after the component is mounted.
- It logs "Message mounted!".
- It returns a cleanup function.
- The cleanup function is stored by React. It is not executed immediately.
Then the component returns:
return <h2>Hello!</h2>


React commits the resulting element to the DOM.
Initial UI
Toggle MessageHello!

First click — show becomes false
Step 1: You click the button.
onClick={() => setShow(!show)}


The handler executes and requests show = false.

Step 2: App re-renders

React executes App again.

This time:
{show && <Message />}


becomes:
{false && <Message />}


Because JavaScript's && operator short-circuits, the right-hand side is not evaluated.

So:
- <Message /> is not evaluated.
- Message is not called.
- Its return statement does not execute.
Step 3: React compares the previous and new UI

Previously, React had a Message component in the UI tree.

Now, that component is absent.

React recognizes that the previously mounted component needs to be removed.

Step 4: Cleanup executes

React removes the component and runs the cleanup function returned by its Effect.

Console:
Message unmounted!


The Hello! heading is removed from the DOM.
Second click — show becomes true
The same process happens in reverse.
1. Button handler requests show = true.
2. App re-renders.
3. React evaluates {true && <Message />}.
4. React sees that Message needs to be rendered.
5. React calls Message again.
6. Its Effect runs after mounting.
7. "Message mounted!" is logged.
8. Its returned JSX is committed to the DOM.
