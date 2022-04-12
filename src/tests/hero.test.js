import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Hero', () => {
  it('has image with alt text "foto do erickson sorrindo com fundo neon circular"',() => {
    render(<App />);
    const image = screen.getByAltText('foto do erickson sorrindo com fundo neon circular');
    expect(image).toBeInTheDocument();
  });

  it('has level 1 heading with text "Erickson Siqueira"', () => {
    render(<App />);
    const h1 = screen.getByRole('heading', { level: 1, name:'Erickson Siqueira'});
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Erickson Siqueira');
  });

  it('has paragraph with text "Olá mundo, eu sou"', () => {
    render(<App />);
    const paragraph = screen.getByText('Olá mundo, eu sou');
    expect(paragraph).toBeInTheDocument();
  });
  it('has paragraph with text "Desenvolvedor web front-end"', () => {
    render(<App />);
    const paragraph = screen.getByText('Desenvolvedor web front-end');
    expect(paragraph).toBeInTheDocument();
  });
  it('has link with href that leads to linkedin page', () => {
    render(<App />);
    const link = screen.getByTestId('hero-linkedin-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/ericksonsiqueira/');
  });
  
  it('has button with text "SAIBA MAIS"', () => {
    render(<App />);
    const button = screen.getByText(/Saiba mais/);
    expect(button).toBeInTheDocument();
  });
})
