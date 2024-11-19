import React from 'react'

/*
primer ejemplo de uso de java script en jsx
const Producto = () => {
  console.log ("Creando un producto")
  return (
    <div>Producto</div>
  )
}
*/
/* segundo ejemplo: pasando valores con una variable
const Producto = () => {
  const productName="Producto 1"
  return( <h1>{productName}</h1>)
}*/
const Producto=()=>{
  const productName = "Producto 1"
  const myStyle = {fontSize:'12px', color:'brown'}
  return (
    <>
    <h1 className='producto'>{productName}</h1>
    <p style={{fontSize:'12px', color:'blue'}}>Operaciones matemáticas Suma:{2+2}</p>
    <p style={myStyle}>Operaciones matemáticas Resta:{2-2}</p>
    <p>Operaciones matemáticas Multiplicacion:{2*2}</p>
    <p>Operaciones matemáticas División:{2 / 2}</p>
    <p>Operaciones matemáticas Módulo:{2%2}</p>
    </>
  )
}

export default Producto
