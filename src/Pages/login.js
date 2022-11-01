import React from 'react';
import { createUser } from '../services/userAPI';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [nome,SetNome] = React.useState('');
  const history = useHistory();

  const user = () => {
    createUser({ name: nome })
    return history.push("/search")
  }

  return (
    <div>
      <label>
        Nome: 
        <input
        type="text"
        onChange={ ({target}) => SetNome(target.value)}
        />
      </label>
      <button
      type='button'
      onClick={ user }
      >
        Entrar
      </button>
    </div>
  );
}