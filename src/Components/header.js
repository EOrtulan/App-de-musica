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
      {carregando ? (<h1 className="loading">CARREGANDO</h1>)
        : (<div className="header">
          <p className="nameUser">{usuario.name}</p>
          <p><Link className="links" to="/search">Pesquisar</Link></p>
          <p><Link className="links" to="/favorites">Favoritos</Link></p>
          <p><Link className="links" to="/profile">Perfil</Link></p>
        </div>)}
    </header>
  )
}