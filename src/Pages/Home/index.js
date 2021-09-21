import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { addReserve } from '../../Store/modules/reserve/actions'
import {FaPlane} from 'react-icons/fa'
import './style.css'




export default function Home() {
 
  const dispatch = useDispatch()
  const [trips, setTrips] = useState([]);
 
  useEffect(() => {
    
    async function loadApi() {
      const response = await api.get('trips')
      setTrips(response.data)
    
    
      console.log(response.data)
    }

    loadApi()
    

  }, []);


  //funções

  function handleAdd(trip) {
    dispatch(addReserve(trip))
  }

 
  return (
   <div>
     <div className="box">
        {trips.map(trip => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ? 'Disponivel' : 'Indisponivel' }</span>

              <button
                type="button"
                onClick={() => handleAdd(trip) }
              >
                <div>
                  <FaPlane size={16} color="#FFF"/>
                </div>
                <span>Solicitar Reserva</span>
              </button>
          </li>
        ))} 
     </div>
   </div>
 );
}