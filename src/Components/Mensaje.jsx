import React from 'react';
import { fracess } from '../utils/fraces';
import arreglo from '../utils/phrases.json';
import '../Css/MensajeApp.css'
import { MensajeApp } from './MensajeApp';

/*
//traemos las freces por medio de la funcion fracess() a esta le pasamos el arraglo.json y lo desestructuramos y pasamos por props(author, phrase) tambien pasamos
la funcion buscar()
*/
const info = fracess(arreglo);

export const Mensaje = () => {


        const buscar = () =>{

          const dato =fracess(arreglo);
          return dato;
        } 

  const { phrase ,author } = info;

  return (
    <>
      <div className='contenedor'>
        
        <MensajeApp
         phrase={phrase}
         autor={author}
         buscar={buscar}
        
        />
      </div>
    </>
  )
}


