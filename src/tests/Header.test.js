import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../Components/Header'

describe('Testando se os elementos foram renderizados corretamente', (() => {
  const titleText = 'Olá, sou o Luciano e este é meu Portfólio';

  beforeEach(() => {
    render(<Header />);
  });

  it('Testa se o título é renderizado e se o conteúdo está correto', () => {
    const headerTitle = screen.getByText(titleText);
    expect(headerTitle).toBeInTheDocument();
  });

  it('Testa se o link para iniciar e o pointer renderizam corretamente', () => {
    const iniciar = screen.getByText('Iniciar');
    expect(iniciar).toBeInTheDocument();

    const linkToMain = screen.getByRole('link');
    expect(linkToMain).toBeInTheDocument();

    const pointer = screen.getByRole('img');
    expect(pointer).toBeInTheDocument();
  })
}));
