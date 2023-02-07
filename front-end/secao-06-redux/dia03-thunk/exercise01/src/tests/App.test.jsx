import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRedux from './helpers/renderWithRedux';

describe('renders learn react link', () => {
    it('Button is render', () => {
        renderWithRedux(<App />)
        const button = screen.getByRole('button', { name: /search/i });
        expect(button).toBeInTheDocument()
  });
});