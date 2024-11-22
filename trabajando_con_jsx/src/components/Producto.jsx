import React from 'react'

/*
primer ejemplo de uso de java script en jsx
const Producto = () => {
  console.log ("Creando un producto")
  return (
    <div>Producto</div>
  )
}*/

// segundo ejemplo: pasando valores con una variable y usando js dentro de return entre{}
/*const Producto = () => {
  const productName="Producto 1"
  return( <h1>{productName}</h1>)
}*/
/* tercer ejemplo:agregando estílos y utilizando operaciones matemáticas en js y entre {} dentro del return. los estilos se agregan de dos formas, en primera instancia se hace en línea con el atributo style dentro del párrafo y en segunda, almacenando los valores dentro de una variable con el atribuyo style, la cual posteriormente se traspasa al html con la sintaxis de expresiones correspondientes.*/
/*const Producto=()=>{
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
} */
// className 'producto' se ubica en index.css
// cuarto ejemplo: uso de props
/*const Producto = (props) => {
  return (
    <>
    <h1>{props.title}</h1>
    <p>Precio:{props.price}</p> 
    </>
  )
} */
/* aplicando destructuring de las propiedades props*/
/*const Producto = ({title, price}) => {
  return (
    <>
    <h1 className='producto'>{title}</h1> 
    <p>Precio:{price}</p>
    </>
  )
}*/
/* props destructuring con valores por defecto*/
const Producto = ({title='Titulo por defecto', price = '1000', stock}) =>{
  return (
    <>
    <h1 className='producto'>{title}</h1>
    <p className= {stock <= 0 ? 'sinStock':null}> {title} - Precio:{price} <span>stock:{stock}</span></p>
    </>
  )
}

export default Producto
