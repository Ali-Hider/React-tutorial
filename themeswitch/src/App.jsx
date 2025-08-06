import { useEffect, useState } from 'react'

import './App.css'
import { Themeprovider} from './Contexts/theme'
import ThemeBtn from './components/ThemBtn'
import Card from './components/Card'

function App() {
 const [thememode, setthememode] = useState("light")

 const lightTheme= () =>{
  setthememode("light")
 }
 const darkTheme = () =>{
  setthememode("dark")
 }

 useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(thememode)
 }, [thememode])


  return (
    <>
     <Themeprovider value={{thememode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
            </div>
</Themeprovider>
    </>
  )
}

export default App
