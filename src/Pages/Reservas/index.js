import React from 'react';
import {FaTrash} from 'react-icons/fa'
import './style.css'



export default function Reservas() {
 return (
   <div>
      <h1 className="title">Você solicitou 1 reservas</h1>
      <div className="reservas">
        <img 
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" 
          alt="Maceio" />
          <strong>Viagem Maceio 7 dias</strong>
          <span>Quantidade: 2</span>
          <button 
            type="button"
            onClick={()=>{}}
            >
              <FaTrash size={20} color="#FFF" />
            </button>
      </div>

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>


   </div>
 );
}