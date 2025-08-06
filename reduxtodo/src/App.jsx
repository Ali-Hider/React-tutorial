import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodos from './components/Addtodos'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
     <h1>this is redux toolkit</h1>
     <Addtodos />
     <Todos />
    </Provider>
  )
}

export default App
