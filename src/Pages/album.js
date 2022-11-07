import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs, addSong, removeSong } from '../services/favoriteSongsAPI';
import Header from '../Components/header';
import iconWhite from '../Icons/icon-heart-white/favoriteWhite-30.png';
import iconRed from '../Icons/icon-heart-red/favoriteRed-30.png';

export default function Album() {
  const [musica, setMusica] = useState('');
  const [carregando,setCarregando] = useState(true);
  const [favorite,setFavorite] = useState('');
  const params = useParams();

  const getMusic = async () => {
    const idString = params.id.toString();
    const response = await getMusics(idString);
    response.shift();
    setMusica(response);
    setCarregando(false);
  }

  const addOrRemove = async (value) => {
    const getMusic = await getFavoriteSongs();

    const isFavorite = getMusic.filter((item) => (item.trackId === value.trackId));

    if (isFavorite.length === 1) {
      const removeMusic = await removeSong(value);
      setFavorite(getMusic)
    }
    
    if (isFavorite.length === 0) {
      const addMusic = await addSong(value);
      setFavorite(getMusic)
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
      {carregando ? (<h1 Class="loading">CARREGANDO</h1>) : (
        <div>
          <Header />
          <div Class="albumheader">
            <img Class="imageAlbumDetail" src={musica[0].artworkUrl100} />
            <div Class="albumInfomation">
              <p>Artista:{' '}{musica[0].artistName}</p>
              <p>Album:{' '}{musica[0].collectionName}</p>
              <p>Gênero:{' '}{musica[0].primaryGenreName}</p>
            </div>
          </div>
          <div Class="musics">
            {carregando ? (<h1 Class="loading">CARREGANDO</h1>)
            : (musica.map((item, index) => (
              <div Class="musicDetails" key={index}>
                <p>{item.trackName}</p>
                <div Class="audioAndFavorite">
                <audio src={item.previewUrl} controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento <code>audio</code>.
                </audio>
                <button
                Class="buttonFavorite"
                type="button"
                onClick={ () =>addOrRemove(item) && checkFavorite(item)}>
                <img
                    Class="imgFavorite"
                    src={ checkFavorite(item) ? iconRed : iconWhite }
                    alt="icone" />
                </button>
                </div>
              </div>
            )))}
          </div>
        </div>
      )}
    </div>
  )
}