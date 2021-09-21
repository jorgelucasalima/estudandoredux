import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeReserve } from '../../Store/modules/reserve/actions'
import {FaTrash} from 'react-icons/fa'
import './style.css'



export default function Reservas() {

  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)

  console.log('MINHAS RESERVAS :', reserves)


  function handleRemove(id) {
    dispatch(removeReserve(id))
    
  }


 return (
   <div>
      <h1 className="title">Você solicitou {reserves.length} reservas</h1>
      
      {reserves.map(reserve => (

        <div className="reservas" key={reserve.id}>
          <img 
          src={reserve.image}
          alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button 
            type="button"
            onClick={() => handleRemove(reserve.id) }
            >
              <FaTrash size={20} color="250f0d" />
          </button>
        </div>



      ))}
      
      

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>


   </div>
 );
}