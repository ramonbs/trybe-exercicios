// src/App.js
import React from 'react'
import Album from '../components/Album/Album'
import './App.css'

class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24'
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    }

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image:
        'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16'
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    }

    // Retorno do que será renderizado
    return (
      <div>
        <Album album={album01} />
        <Album album={album02} />
      </div>
    )
  }
}

export default App
