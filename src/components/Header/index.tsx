import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="Logo do github blog >_" />
      </NavLink>
    </HeaderContainer>
  )
}
