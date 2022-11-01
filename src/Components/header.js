import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {getUser} from '../services/userAPI'

export default function Header() {
  const [usuario,setUsuario] = useState('');
  const [carregando,setCarregando] = useState(true);

  const resquest = async () => {
    const response = await getUser();
    setUsuario(response);
    setCarregando(false)
  }

  useEffect(() => {
    resquest()
  },[]);

  return (
    <header>
      {carregando ? (<h1>CARREGANDO</h1>)
        : (<div>
          <p>{usuario.name}</p>
          <p><Link to="/search">Pesquisa</Link></p>
          <p><Link to="/favorites">Favoritas</Link></p>
          <p><Link to="/profile">Perfil</Link></p>
        </div>)}
    </header>
  )
}