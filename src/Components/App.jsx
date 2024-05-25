import React from 'react'
import '../Css/App.css'
import { Mensaje } from './Mensaje'




export const App = () => {
  return (
    <>
       <div className='Contenedor-Principal'>
        <h1>Galletas de la Fortuna</h1>
        
        <Mensaje />
    </div>
    </>
  )
}


