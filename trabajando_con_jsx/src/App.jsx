import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Producto from './components/Producto'

function App() {
return (
  <>
  <Producto/>
  <Producto title="Frutilla" price = "400" stock = "0"/>
  <Producto title="Maracuyá"price = "700" stock = "10"/>
  <Producto title="Durazno"price = "1000" stock = "20"/>
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
