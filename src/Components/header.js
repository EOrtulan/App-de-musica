import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getUser} from '../services/userAPI'

export default function Header() {
  const [usuario,setUsuario] = useState('')

  const resquest = async () => {
    const response = await getUser();
    setUsuario(response);
  }

  useEffect(() => {
    resquest()
  },[]);

  return (
    <header>
      <p>{usuario.email}</p>
      <p><Link to="/search">Pesquisa</Link></p>
      <p><Link to="/favorites">Favoritas</Link></p>
      <p><Link to="/profile">Perfil</Link></p>
    </header>
  )
}