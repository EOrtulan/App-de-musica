import React from 'react';

export default function Login() {
  const [email,Setemail] = React.useState('');
  const [password,Setpassword] = React.useState('');

  const validation = () => {
    const validEmail = /\S+@\S+\.\S+/;
    const validPassword = 6;

    const validatingEmail = validEmail.test(email);

    if(validatingEmail === true && password.length >= validPassword) {
      return alert("logado com sucesso")
    }

    return alert("Usuário ou password inválidos")
  }

  return (
    <form>
      <label>
        Email: 
        <input
        type="email"
        onChange={ ({target}) => Setemail(target.value)}
        />
      </label>
      <br/>
      <label>
        Senha: 
        <input
        type="password"
        onChange={ ({target}) => Setpassword(target.value)}
        />
      </label>
      <br/>
      <button
      type='button'
      onClick={ validation }
      >
        Login
      </button>
    </form>
  );
}