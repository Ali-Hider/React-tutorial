import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Extracard from './Extra/Extracard'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
    
      <div className='w-full min-h-screen duration-200 m-0 p-0' style={{backgroundColor : color}}>
  <h1 className='text-3xl bg-green-500 p-3 rounded-md '>vite using tailwindcss</h1>
      <h2 className='text-3xl bg-red-500 p-3 rounded-md '>Day 2 using vite to create bg changer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
              <Extracard username="1stwebsite" />
            <Extracard />
            <Extracard username="1stwebsite" />
      </div>

      <div className='fixed flex flex-wrap justify-center bottom-19 inset-x-0 px-2'>
        <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-amber-300 px-3 py-2 rounded-3xl'>
           <button onClick={()=> setcolor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg  text-black font-bold' style={{backgroundColor : 'red'}}>Red</button>
            <button onClick={()=> setcolor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black font-bold' style={{backgroundColor : 'green'}}>Green</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
