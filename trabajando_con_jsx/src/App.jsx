import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './components/Producto'

function App() {
return (
  <>
  <Producto/>
  <Producto title="Producto1" price = "400"/>
  <Producto title="Producto2"price = "700"/>
  <Producto title="Producto3"price = "1000"/>
  </>
)
  /*elementos utilizados para el ejemplo de agregar estilos
  const [count, setCount] = useState(0)

  return (
    <>
      <Producto></Producto>
    </>
  )*/
}

export default App
