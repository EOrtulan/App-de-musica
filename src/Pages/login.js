import React, { useState }  from 'react';
import { createUser } from '../services/userAPI';
import { useNavigate } from 'react-router-dom';
import iconMusic from '../Icons/icon-music/notas-musicais.png'

export default function Login() {
  const [nome, SetNome] = useState('');
  const [email, SetEmail] = useState('');
  const history = useNavigate();

  const user = () => {
    createUser({ name: nome, email: email })
    return history("/search")
  }

  const validation = () => {
    const validEmail = /\S+@\S+\.\S+/;

    const validatingEmail = validEmail.test(email);

    if (validatingEmail && nome.length >= 2) {
      return false;
    }
    
    return true;
  }

  return (
    <div className="login">
      <div className="loginInputsDiv">
      <img src={iconMusic} className="iconMusic" alt="musica" />
      <label>
        <input
        type="text"
        placeholder='Nome'
        className="inputLogin"
        onChange={ ({target}) => SetNome(target.value)}
        />
      </label>
      <label>
        <input
        type="text"
        placeholder='Email'
        className="inputLogin"
        onChange={ ({target}) => SetEmail(target.value)}
        />
      </label>
      <button
      className="buttonLogin"
      type='button'
      disabled={validation()}
      onClick={ user }
      >
        Entrar
      </button>
      </div>
    </div>
  );
}