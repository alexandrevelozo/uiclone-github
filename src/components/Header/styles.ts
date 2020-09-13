import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  height: 54px;
  padding-left: 16px;

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex: auto;
  padding: 11px 16px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContentItems = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink: 0;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  width: 100%;

  label {
    display: flex;
  }

  .mr-2 {
    z-index: 2;
    left: 240px;
    padding-top: 4px;
    cursor: text;
    padding-right: 50px;
    position: absolute;
  }

  input {
    background: var(--search);
    z-index: 1;
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    /* max-width: 272px; */
    position: relative;

    &:focus {
      width: 500px;
      max-width: 434px; /* usar no media query */
      background: #fafbfc;

      ::-webkit-input-placeholder {
        color: #4f4f4f;
      }
      z-index: 3;
    }
    ::-webkit-input-placeholder {
      color: #c9d0cb;
      font-size: 14px;
    }
    transition: width 130ms ease-in-out, color 130ms ease-in-out;
  }
`;

export const HeaderItems = styled.div`
  width: 100%;
  display: flex;

  .header-items-left {
    padding-left: 10px;
  }

  .header-items-left span {
    font-size: 14px;
    font-weight: 600;
    padding: 10px;
    flex-direction: row;
    width: 100%;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: #ffffff;
  }
`;

export const ContentButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 6px;

  .secondary,
  svg .octicon {
    padding-left: 10px;
  }

  svg {
    fill: #ffffff;
  }

  .avatar-img {
    padding-left: 10px;
  }

  .avatar-img img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 10px;
  height: 10px;
`;
