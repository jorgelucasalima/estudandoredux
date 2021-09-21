import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash ,FaMinus, FaPlus } from 'react-icons/fa'
import { removeReserve, updateAmountReserve } from '../../Store/modules/reserve/actions'
import './style.css'




export default function Reservas() {

  const dispatch = useDispatch()
  const reserves = useSelector(state => state.reserve)

  console.log('MINHAS RESERVAS :', reserves)


  function handleRemove(id) {
    dispatch(removeReserve(id))
    
  }



  function decrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount - 1))
  }

  function incrementAmount(trip) {
    dispatch(updateAmountReserve(trip.id, trip.amount + 1))

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

          <div id="amount">
            <button type="button" onClick={() => decrementAmount(reserve)}>
              <FaMinus size={20} color="#250f0d" />
            </button>
            <input type="text" readOnly value={reserve.amount} />
            <button type="button" onClick={()=> incrementAmount()}>
              <FaPlus size={20} color="#250f0d" />
            </button>

          </div>

          
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