import React, { useState }  from 'react';
import { createUser } from '../services/userAPI';
import { useHistory } from 'react-router-dom';
import iconMusic from '../Icons/icon-music/notas-musicais.png'

export default function Login() {
  const [nome, SetNome] = useState('');
  const [email, SetEmail] = useState('');
  const history = useHistory();

  const user = () => {
    createUser({ name: nome, email: email })
    return history.push("/search")
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
    <div class="login">
      <div Class="loginInputsDiv">
      <img src={iconMusic} Class="iconMusic" alt="musica" />
      <label>
        <input
        type="text"
        placeholder='Nome'
        Class="inputLogin"
        onChange={ ({target}) => SetNome(target.value)}
        />
      </label>
      <label>
        <input
        type="text"
        placeholder='Email'
        Class="inputLogin"
        onChange={ ({target}) => SetEmail(target.value)}
        />
      </label>
      <button
      class="button"
      type='button'
      disabled={validation()}
      Class="buttonLogin"
      onClick={ user }
      >
        Entrar
      </button>
      </div>
    </div>
  );
}