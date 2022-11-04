import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import Header from '../Components/header';

export default function Album() {
  const [musica, setMusica] = useState('');
  const [carregando,setCarregando] = useState(true);
  const params = useParams();

  const getMusic = async () => {
    const idString = params.id.toString();
    const response = await getMusics(idString);
    response.shift();
    setMusica(response);
    setCarregando(false);
    console.log(response);
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
            {musica.map((item, index) => (
              <div Class="musicDetails" key={index}>
                <p>{item.trackName}</p>
                <audio src={item.previewUrl} controls>
                  <track kind="captions" />
                  O seu navegador não suporta o elemento <code>audio</code>.
                </audio>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}