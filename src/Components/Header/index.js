import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg'
import './style.css'



export default function Header() {

  const reserveSize = useSelector(state => state.reserve)

 return (
   <header className="container">
     
     <Link to="/">
        <img className="logo" src={logo} alt="Logo" /> 
     </Link>

     <Link className="reserva" to="reservas">
       <div>
         <strong>Minhas Reservas</strong>
         <span>{reserveSize.length}</span>
       </div>
     </Link>

   </header>
 );
}