import { Header } from '../../components/Header'
import { DefaultLayoutContainer, DefaultLayoutContent } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <DefaultLayoutContent>
        <Outlet />
      </DefaultLayoutContent>
    </DefaultLayoutContainer>
  )
}

export default DefaultLayout
