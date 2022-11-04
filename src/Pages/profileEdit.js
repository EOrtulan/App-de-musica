import React, {useState, useEffect} from 'react';
import { getUser } from '../services/userAPI';
import Header from '../Components/header';

export default function ProfileEdit() {
  const [usuario, setUsuario] = useState({});
  const [carregando, setCarregando] = useState(true);
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [descriçao,setDescriçao] = useState('');
  const [imagem,setImagem] = useState('');

  const user = async () => {
    const request = await getUser();
    setUsuario(request);
    setCarregando(false);
  }

  // const validation = () => {
  //   const validEmail = /\S+@\S+\.\S+/;
  //   const validatingEmail = validEmail.test(email);

  //   if(nome.length > 2)return true;
  //   if(validatingEmail) return true;
  //   if(descriçao.length > 2) return true;
  //   if(imagem.length > 2) return true;
  // }

  useEffect(() => {
    user()
  }, []);

  // useEffect(() => {
  //   validation()
  // }, [nome, descriçao, imagem, email]);

  return (
    <div>
      {carregando ? (<h1 Class="loading">CARREGANDO</h1>)
      : (<div>
          <Header />
          <h1 Class="loading">EM PRODUÇÃO</h1>
         </div>)
        // : (<div>
        //   <Header />
        //   <div>
        //   <from>
        //   <label>
        //     Nome:
        //     <input
        //       onChange={({ target }) => setNome(target.value)}
        //       placeholder={usuario.name}
        //       type="text" />
        //   </label>
        //   <label>
        //     Email:
        //     <input
        //       placeholder={usuario.email}
        //       onChange={({ target }) => setEmail(target.value)}
        //       type="text" />
        //   </label>
        //   <label>
        //     Descrição:
        //     <textarea
        //       onChange={({ target }) => setDescriçao(target.value)}
        //       name="message"
        //       rows="10"
        //       cols="30">
        //     </textarea>
        //   </label>
        //   <label>
        //     Imagem:
        //     <input
        //       onChange={({ target }) => setImagem(target.value)}
        //       placeholder={usuario.image}
        //       type="text" />
        //   </label>
        //   <button type="button">
        //     Salvar
        //   </button>
        // </from>
        // </div>
        // </div>
        // )
        
         }
    </div>
  )
}