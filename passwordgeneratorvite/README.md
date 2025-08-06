# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
At first declare and initialize these states
  const [length,setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [password,setPassword] = useState('')
Now, create a function that will manipulate this states and responds to their updates
   const generatePassword =()=>{}
But, if you look at this carefully, when you press numberAllowed or characterAllowed or change length, then the password would be re-rendered. so make this function reusable so that we do not need to re-create this function everytime. best option is  useCallback().useCallback lets you cache a function definition before passing it down to an optimized component.  
     const generatePassword = useCallback(() =>{
      let pass = ""
      let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str+= "0123456789"
      if(charAllowed) str+= "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
      for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
       }
       setPassword(pass)
    },[length, numberAllowed, charAllowed])

Then after making the layout if i directly call the generatePassword(),  the component’s body (outside of useEffect) leads to:

🔁 State update → re-render → generatePassword → state update → ...∞

       function App() {
         const [password, setPassword] = useState('');

         const generatePassword = () => {
         let pass = '...generated...';
         setPassword(pass); // 🧨 This triggers a re-render!
                            };

           generatePassword(); // ❌ Called directly

          return (...);
          }

🔄 What Happens Step-by-Step:
Component renders

generatePassword() runs → calls setPassword()

setPassword() triggers a re-render

On the new render, generatePassword() is called again

Step 2 repeats...

🔥 Boom — Infinite re-render loop!

✅ Correct Usage: useEffect
Instead, use useEffect to control when it should generate a new password:
This ensures generatePassword runs only when it’s needed.

It doesn't trigger itself, avoiding a loop.

     useEffect(()=>{
        generatePassword()  
      },[length, numberAllowed, charAllowed])

 Let’s Explain the Responsibilities of  useEffect and useCallback: 
✅ useCallback — memoizes the function
React will reuse the same generatePassword function between renders unless length, numberAllowed, or charAllowed change.useCallback creates the function (only once unless dependencies change).useCallback prevents unnecessary recreation of generatePassword.

🔒 This doesn't run anything — it just returns a stable function. it doesn’t call it.
✅ useEffect — controls when the function runs
This is where you actually run the function.

It triggers generatePassword() only when dependencies change — i.e., password needs to be regenerated.

🔁 So when length, numberAllowed, or charAllowed change:
1. generatePassword is recreated by useCallback
React sees that one or more dependencies changed

It returns a new version of the function

2. useEffect sees that generatePassword has changed
So it runs the effect again

That means generatePassword() is called, which sets a new password

🧠 When do you need useCallback?
You don’t use it to trigger anything.
You use it to preserve the function between renders —
especially when your component re-renders due to other reasons (not your dependencies).
If the component re-renders due to some other state (like dummy),
and you’re not using useCallback, then:

generatePassword will be a brand-new function (even though it won’t be called)

Wasted memory, unnecessary function churn.
But the password only changes if generatePassword() is called, which it won’t be unless the useEffect triggers it

So password stays the same — just a new unused function is sitting in memory

🧠 The value of useCallback here is not to prevent password changes — it's to prevent function recreation when not needed, which is helpful for performance or child props.

Now i need to copy the password. so , here:
        <input type="text" 
            value={password} className='outline-none bg-white w-full py-1 px-3 text-black'
            placeholder='password'
            readOnly
            ref={passwordref}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-500 text-white px-3 
            py-0.5 shrink-0 '> Copy</button>
As you can see the input and the button are separate elements. For this 2 to work well we will use useref. useRef() creates a mutable object with a .current property. It’s used to store a reference to a DOM element or any mutable value that persists across renders without causing re-renders.
First create a variable.
          const passwordref = useRef(null)
Now pass that to input.          
               <input type="text" 
            ............
            ref={passwordref}
            />
Then define a function where u will use this in the button.
             <button 
            onClick={copyPasswordToClipboard}
            ......./button>
 In that function define its functionality of highlighting after button being pressed.
              const copyPasswordToClipboard = () =>{
              window.navigator.clipboard.writeText(password)// this is for copying on the clipboard
              passwordref.current?.select()// this is for highlighting
              passwordref.current?.setSelectionRange(0,9)// this will select a range 
              }           