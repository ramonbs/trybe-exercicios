import { render, screen } from '@testing-library/react'

import Album from './Album'

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

describe('Testando o componente Album', () => {
  test('Testando se o componente Album é renderizado com sucesso', () => {
    render(<Album album={album01} />)
  })
  test('Testando se a imagem existe', () => {
    render(<Album album={album01} />)
    const image = screen.getByRole('img')
    expect(image).toBeInTheDocument()
  })
  test('Testando se o título existe', () => {
    render(<Album album={album01} />)
    const título = screen.getByRole('heading', { level: 2 })
    expect(título).toBeInTheDocument()
  })
  test('Testando se o ano existe', () => {
    render(<Album album={album01} />)
    const ano = screen.getByText('2011')
    expect(ano).toBeInTheDocument()
  })
})
