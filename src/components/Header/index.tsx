import React from 'react'
import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo do github blog >_" />
    </HeaderContainer>
  )
}
