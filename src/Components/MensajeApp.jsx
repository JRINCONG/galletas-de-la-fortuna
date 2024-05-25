import React, { useState } from 'react';
import { fracess } from '../utils/fraces';
import  {imagenes}  from '../utils/img';
import '../Css/MensajeApp.css';

/*
Aca recibimos las props(autor, phrase, buscar=> esta es una referencia a una funcion) creamos dos useState uno para el (autor) y el otro para phrase.

Esta funcion generar() hacemos referencia a ella desde el botton. tambien dentro de esta funcinon te nemos la funcion
buscar()  el cual la invocamos para poder realizar nuevemenete la peticion y traer una nueva fracess para asi 
pasarlas al useState. 

para actualizar las imagens de fondo lo que se hizo fue llamar al contenedor principal.
document.querySelector('.Contenedor-Principal').style.backgroundImage= `url('${fracess(imagenes())}')` y pasar la funcion fraces deon de le pasamos como parametro el arreglo donde estan la ruta de las imagenes para que nos devuelva la ruta aleatoria.
*/

export const MensajeApp = ({autor, phrase, buscar}) => {

    const [ creador, setCreador ] = useState(autor);

    const [ Msg, SetMsg ] = useState(phrase);
   
 

      const generar = ()=>{
        const NewMsg=buscar();
        const{phrase, author}=NewMsg;
       SetMsg(phrase);
       setCreador(author);
       document.querySelector('.Contenedor-Principal').style.backgroundImage= `url('${fracess(imagenes())}')`;
    }


  return (
    <>
    <div className='Contenedor-frces-autor'>
    <p className='p-Fraces'>{Msg}</p>
     <span className='span-autor'>{creador}</span>
     </div>
     <div className='caja-btn'>
        <button className='btn' onClick={generar}>Probar mi Suerte</button>
        </div> 
    </>
  )
}


