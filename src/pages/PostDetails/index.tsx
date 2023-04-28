import { useParams } from 'react-router-dom'
import { Header } from '../../components/Header'

export function PostDetails() {
  const { postId } = useParams()

  return (
    <>
      <Header />
      <div>
        <h1>Post</h1>
        <h1>{postId}</h1>
      </div>
    </>
  )
}
