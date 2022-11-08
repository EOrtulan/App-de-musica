import React, { useState, useEffect } from 'react';
import { getUser } from '../services/userAPI';
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
      {carregando ? (<h1 className="loading">CARREGANDO</h1>)
        : (
          <div>
            <Header />
            <div className="cardProfile">
            <p>Nome: {usuario.name}</p>
            <p>Email: {usuario.email}</p>
            </div>
          </div>
        )}
    </div>
  )
}