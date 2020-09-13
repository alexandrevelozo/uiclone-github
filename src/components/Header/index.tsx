import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import {
  Container,
  Wrapper,
  ContentItems,
  GithubLogo,
  SearchForm,
  HeaderItems,
  ContentButtons,
  CaretDownIcon,
} from './styles';

import { ThemeName } from '../../styles/theme';

interface Props {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLocaleLowerCase().trim());
  }

  const isResponsive = useMediaQuery({
    query: '(max-width: 1111px)',
  });

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme} />
      <Wrapper>
        <ContentItems>
          <SearchForm onSubmit={handleSubmit}>
            <label>
              <input
                placeholder="Search or jump to..."
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
              <img
                src="https://github.githubassets.com/images/search-key-slash.svg"
                alt=""
                className="mr-2 header-search-key-slash"
              />
            </label>
          </SearchForm>
          <HeaderItems>
            <div className="header-items-left">
              <span>{isResponsive ? 'Pulls' : 'Pull requests'}</span>
              <span>Issues</span>
              <span>Marketplace</span>
              <span>Explore</span>
            </div>
          </HeaderItems>
        </ContentItems>

        <ContentButtons>
          <div className="octicon-bell">
            <svg
              className="octicon octicon-bell"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"></path>
              <path
                fill-rule="evenodd"
                d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
              ></path>
            </svg>
          </div>

          <div className="secondary">
            <svg
              className="octicon octicon-plus"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
              ></path>
            </svg>{' '}
            <CaretDownIcon />
          </div>

          <div className="avatar-img">
            <img src="https://github.com/alexandrevelozo.png" alt="" />
            <CaretDownIcon />
          </div>
        </ContentButtons>
      </Wrapper>
    </Container>
  );
};

export default Header;
