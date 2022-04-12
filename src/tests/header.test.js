import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Header', () => {

  describe('nav has link with text', () => {

    it('"Home"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Home/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#home');
    });
    it('"Sobre"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Sobre/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#about');
    });

    it('"Tecnologias"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Tecnologias/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#technologies');
    });

    it('"Projetos"', () => {
      render(<App />)
      const link = screen.getByRole('link', { name: /Projetos/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#projects');
    });

    it('"Contato"', () => {
      render(<App />);
      const link = screen.getByRole('link', { name: /Contato/ });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '#contact');
    });
  });

  describe('social media section links have the rigth href to', () => {
    it('GitHub page', () => {
      render(<App />);
      const link = screen.getByTestId('header-github-link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://github.com/EricksonSiqueira')
    });
    it('Linkedin page', () => {
      render(<App />);
      const link = screen.getByTestId('header-linkedin-link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/ericksonsiqueiraa/');
    });
  });
});

// just to see if CI runs it
