import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './components/Producto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto></Producto>
    </>
  )
}

export default App
