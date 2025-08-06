import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length,setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [password,setPassword] = useState('')

   const passwordref = useRef(null)
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
 const copyPasswordToClipboard = () =>{
  window.navigator.clipboard.writeText(password)
  passwordref.current?.select()
   passwordref.current?.setSelectionRange(0,9)
 }

  useEffect(()=>{
     generatePassword()  
  },[length, numberAllowed, charAllowed])

  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-9 
     my-8 bg-gray-800 text-orange-500'>
         <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
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
          </div>
          <div className='flex text-sm gap-x-4'>
            <div className='flex items-center gap-x-1'>
               <input type="range"
                       min={6} max={100} value={length}
                       className='cursor-pointer' 
                       onChange={(e) => setlength(e.target.value)}
                       name="" id=""
               />
               <label htmlFor="length">Length :</label>
            </div>
             <div className='flex items-center gap-x-1'>
               <input type="checkbox"
                       defaultChecked={numberAllowed}
                       onChange={()=>{setNumberAllowed((prev)=> !prev)}}
                       name="" id=""
               />
               <label htmlFor="number">Numbers :</label>
            </div>
            <div className='flex items-center gap-x-1'>
               <input type="checkbox"
                       defaultChecked={charAllowed}
                       onChange={()=>{setcharAllowed((prev)=> !prev)}}
                       name="" id=""
               />
               <label htmlFor="charInput">Characters :</label>
            </div>
          </div>
     </div>
    </>
  )
}

export default App
