import React, {useEffect, useState} from 'react';
import Header from '../Components/header';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import iconWhite from '../Icons/icon-heart-white/favoriteWhite-30.png';
import iconRed from '../Icons/icon-heart-red/favoriteRed-30.png';

export default function Favorites() {
  const [musica,setMusica] = useState('');
  const [carregando,setCarregando] = useState(true);
  const [favorito,setFavorito] = useState(true);

  const getMusic = async () => {
    const musicsFavorites = await getFavoriteSongs();
    setMusica(musicsFavorites)
    setCarregando(false);
  }

  const addOrRemove = async (value) => {
    const getMusic = await getFavoriteSongs();

    const isFavorite = getMusic.filter((item) => (item.trackId === value.trackId));

    if (isFavorite.length === 1) {
      const removeMusic = await removeSong(value);
      setFavorito(false)
    }
    
    if (isFavorite.length === 0) {
      const addMusic = await addSong(value);
      setFavorito(true)
    }
  }

  const checkFavorite = (value) => {
    const getMusic = JSON.parse(localStorage.getItem('favorite_songs'));

    const isFavorite = getMusic.filter((item) => (item.trackId === value.trackId));

    if (isFavorite.length === 1) {
      return true
    }
    
    if (isFavorite.length === 0) {
      return false
    }
    return isFavorite
  }

  useEffect(() => {
    getMusic();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {carregando ? (<h1 Class="loading">CARREGANDO</h1>)
          : (musica.map((item, index) => (
            <div Class="musicDetails" key={index}>
              <p>{item.artistName} - {item.trackName}</p>
              <div Class="audioAndFavorite">
                <audio src={item.previewUrl} controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento <code>audio</code>.
                </audio>
                <button Class="buttonFavorite"
                  type="submit"
                  onClick={() => addOrRemove(item) && checkFavorite(item)}>
                  <img
                    Class="imgFavorite"
                    src={checkFavorite(item) ? iconRed : iconWhite}
                    alt="icone" />
                </button>
              </div>
            </div>
          )))}
      </div>
    </div>
  )
}