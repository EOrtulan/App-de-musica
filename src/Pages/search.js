import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI'

export default function Search() {
  const [input,Setinput] = useState('');
  const [artista,SetArtista] = useState('');

  const pesquisaArtista = async () => {
    const response = await searchAlbumsAPI(input);
    await SetArtista(response);
    Setinput('');
  }

    return (
        <form>
          <input
          type="text"
          value={input}
          onChange={ ({target}) => Setinput(target.value)}
          />
          <button
          type='button'
          onClick={pesquisaArtista}
          >
            Pesquisar
          </button>
          <div>
            {artista === '' ? null : artista.map((item,index) => (
              <Link 
              key={index}
              to={ `/album/${item.collectionId}` }
              >
                <img
                src={item.artworkUrl100}
                />
                <p>{item.collectionName}</p>
              </Link>))}
        </div>
      </form>
    )
}