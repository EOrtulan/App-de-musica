import React from 'react';
import { createUser } from '../services/userAPI';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [nome, SetNome] = React.useState('');
  const history = useHistory();

  const user = () => {
    createUser({ name: nome })
    return history.push("/search")
  }

  return (
    <div class="loading login">
      <label>
        <input
        type="text"
        placeholder='Nome'
        Class="inputLogin"
        onChange={ ({target}) => SetNome(target.value)}
        />
      </label>
      <button
      class="button"
      type='button'
      disabled={nome.length < 2}
      Class="buttonLogin"
      onClick={ user }
      >
        Entrar
      </button>
    </div>
  );
}