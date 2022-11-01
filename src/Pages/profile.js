import React, { useState, useEffect } from 'react';
import { getUser } from '../services/userAPI';
import { Link } from 'react-router-dom';
import Header from '../Components/header';

export default function Profile() {
  const [usuario,setUsuario] = useState({});
  const [carregando,setCarregando] = useState(true)

  const user = async () => {
    const request = await getUser();
    setUsuario(request);
    setCarregando(false);
  }

  useEffect(() => {
    user()
  }, []);

  return (
    <div>
      {carregando ? (<h1>CARREGANDO</h1>)
        : (
          <div>
            <Header />
            <Link
              to="/profile/edit"
            >Editar perfil</Link>
            <p>Nome: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            <p>Imagem: {usuario.image}</p>
            <p>Descrição: {usuario.description}</p>
          </div>
        )}
    </div>
  )
}