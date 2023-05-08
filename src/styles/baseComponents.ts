import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BaseLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['brand-blue']};
  text-decoration: none;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  line-height: 130%;

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 700;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['brand-blue']};
  }
`
