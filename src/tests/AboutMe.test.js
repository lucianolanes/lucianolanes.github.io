import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from '../Components/AboutMe'

describe('Testando se os elementos foram renderizados corretamente', (() => {

  beforeEach(() => {
    render(<AboutMe />);
  });

  it('Testa se o título é renderizado e se o conteúdo está correto', () => {
    const headerTitle = screen.getByText('Sobre Mim');
    expect(headerTitle).toBeInTheDocument();
  });

  it('Testa se os elementos do profile card renderizam', () => {
    const profilePic = screen.getByTestId('profile-pic');
    expect(profilePic).toBeInTheDocument();

    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();

    const HPInfo = screen.getByTestId('hpInfo');
    expect(HPInfo).toBeInTheDocument();

    const HPbar = screen.getByTestId('hpBar');
    expect(HPbar).toBeInTheDocument();

    const MPinfo = screen.getByTestId('mpInfo');
    expect(MPinfo).toBeInTheDocument();

    const MPbar = screen.getByTestId('mpBar');
    expect(MPbar).toBeInTheDocument();

    const LinkedInBar = screen.getByTestId('LinkedInBar');
    expect(LinkedInBar).toBeInTheDocument();

    const GitHubBar = screen.getByTestId('GitHubBar');
    expect(GitHubBar).toBeInTheDocument();

    const profileText = screen.getByTestId('profileText');
    expect(profileText).toBeInTheDocument();
  })
}));
