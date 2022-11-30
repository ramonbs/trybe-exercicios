import { render, screen } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('renders two albums', () => {
    render(<App />)
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
