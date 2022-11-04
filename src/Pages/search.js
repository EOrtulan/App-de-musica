import React, {useState} from 'react';
import Header from '../Components/header';
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
      <div>
        <Header />
        <div>
          <div Class="loading">
          <input
            type="text"
            value={input}
            Class="inputSearch"
            placeholder="O que você gostaria de ouvir?"
            onChange={({ target }) => Setinput(target.value)}
          />
          <button
            type='button'
            Class="buttonSearch"
            onClick={pesquisaArtista}
          >
            Pesquisar
          </button>
        </div>
        <div Class="divCards">
          {artista === '' ? null : artista.map((item, index) => (
            <div>
              <div Class="cardMusic">
              <Link
                key={index}
                Class="nameAlbumSearch"
                to={`/album/${item.collectionId}`}
              >
                <img
                  src={item.artworkUrl100}
                  Class="imgSearch"
                />
                <p>{item.collectionName}</p>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}