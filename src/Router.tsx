import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { PostDetails } from './pages/PostDetails'
import DefaultLayout from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" Component={DefaultLayout}>
        <Route path="/" Component={Home} />
        <Route path="/post/:postId" Component={PostDetails} />
      </Route>
    </Routes>
  )
}
