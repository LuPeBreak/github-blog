import { useParams } from 'react-router-dom'

export function PostDetails() {
  const { postId } = useParams()

  return (
    <>
      <div>
        <h1>Post</h1>
        <h1>{postId}</h1>
      </div>
    </>
  )
}
