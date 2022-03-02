import React from 'react';
import { HeaderStyled, ButtonIcon } from './HeaderStyle';
import menuIcon from '../../img/menu-icon.png'
import reactIcon from '../../img/react-icon.png'

const Header = () => {
  return (
    <HeaderStyled>
      <ButtonIcon >
        <img src={ menuIcon } alt="icone de menu" />
      </ButtonIcon>
      <ButtonIcon>
        <img src={reactIcon} alt="icone de menu" />
      </ButtonIcon>
    </HeaderStyled>
  );
}

export default Header;
