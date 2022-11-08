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
    if (response.length === 0) {
      Setinput('');
      return alert('Nenhum artista encontrado')
    }
    Setinput('');
  }

    return (
      <div>
        <Header />
        <div>
          <div className="loading">
          <input
            type="text"
            value={input}
            className="inputSearch"
            placeholder="Escolha um artista"
            onChange={({ target }) => Setinput(target.value)}
          />
          <button
            type='button'
            className="buttonSearch"
            onClick={pesquisaArtista}
          >
            Pesquisar
          </button>
        </div>
        <div className="divCards">
          {artista === '' ? null : artista.map((item) => (
            <div key={item.collectionId}>
              <div className="cardMusic">
              <Link
                className="nameAlbumSearch"
                to={`/album/${item.collectionId}`}
              >
                <img
                  src={item.artworkUrl100}
                  className="imgSearch"
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