import { useState } from 'react'

import './App.css'

function App() {
  //let counter= 15
    const [counter, setCounter] = useState(0)
    const addValue= () =>{
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
      setCounter((counter)=>counter+1)
    }
     const removeValue= () =>{
      setCounter(counter- 1)
    }

  return (
    
    <>
      <h1>This is second Vite app</h1>
      <h2>counter: {counter}</h2>
      <button onClick={addValue}>add counter</button>
      <button onClick={removeValue}>remove counter</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
/* const [counter, setCounter] = useState(0);
✅ This is a React Hook — specifically, the useState hook.
🔍 What is a Hook?
Hooks are special functions in React that let you "hook into" React features — like state or lifecycle — inside functional components.

📌 What useState(0) does:
useState is a hook that manages local state in a functional component.

useState(0) initializes the state with a value of 0.

It returns a pair:

counter: the current state value

setCounter: a function to update that value

🔁 Every time setCounter(...) is called:
React re-renders the component with the updated value.
setCounter(counter + 1);
 in this function
 const addValue = () => {
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
};
You’re incrementing the counter state 4 times, and you're doing it correctly using the functional update form.
if u don't use callback
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
React will treat all four as using the same stale value of counter. So instead of incrementing by 4, it’ll only increment by 1 (maybe 2 depending on timing), because:

React batches state updates to optimize rendering.

All four calls see the same value of counter before the state has updated.
✅ Why the callback form works
This tells React:

"Hey React, don’t rely on the current counter in this scope. Wait until the previous state is ready and then apply this update."
What is Batching?
Batching means React combines multiple setState calls into a single render to improve performance.

So in your case:

Even though you're updating the state 4 times,

React waits, groups them together,

And re-renders only once.
When Should You Use Callback?
Use the callback version of setState (or useState) when:

You're doing multiple updates in a row.

You're relying on the previous value of the state
*/