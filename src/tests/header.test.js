import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Header', () => {

  describe('nav', () => {

    it('has link with text "Home"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Home/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#home');
    });
    it('has link with text "Sobre"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Sobre/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#about');
    });

    it('has link with text "Tecnologias"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Tecnologias/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#technologies');
    });

    it('has link with text "Projetos"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Projetos/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#projects');
    });

    it('has link with text "Contato"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Contato/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#contact');
    });
  });

  describe('social media section', () => {
  });
});
