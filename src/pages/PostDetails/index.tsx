import { useParams } from 'react-router-dom'
import { PostContent, PostDetailsContainer, PostTitleCard } from './styles'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaCalendarDay,
  FaComment,
} from 'react-icons/fa'
import { BaseLink } from '../../styles/baseComponents'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { MarkdownConverter } from '../../components/MarkdownConverter'

interface PostData {
  postURL: string
  title: string
  body: string
  userLogin: string
  comments: number
  createdAt: string
}

export function PostDetails() {
  const { postId } = useParams()
  const [post, setPost] = useState<PostData>({} as PostData)
  const formattedDate = post.createdAt
    ? formatDistanceToNow(new Date(post.createdAt), {
        addSuffix: true,
        locale: ptBR,
      })
    : ''

  const GetPostData = useCallback(async () => {
    const response = await api.get(
      `/repos/lupebreak/github-blog/issues/${postId}`,
    )

    const data = response.data
    const postData: PostData = {
      postURL: data.html_url,
      title: data.title,
      body: data.body,
      userLogin: data.user.login,
      comments: data.comments,
      createdAt: data.created_at,
    }

    setPost(postData)
  }, [postId])

  useEffect(() => {
    GetPostData()
  }, [GetPostData])

  return (
    <PostDetailsContainer>
      <PostTitleCard>
        <nav>
          <BaseLink to={'/'}>
            <FaChevronLeft size={12} /> <span>Voltar</span>
          </BaseLink>
          <BaseLink to={post.postURL || ''}>
            <span>Ver no github</span> <FaExternalLinkAlt size={12} />
          </BaseLink>
        </nav>
        <h1>{post.title}</h1>
        <div>
          <span>
            <FaGithub size={18} /> {post.userLogin}
          </span>
          <span>
            <FaCalendarDay size={18} />
            {formattedDate}
          </span>
          <span>
            <FaComment size={18} /> {post.comments}
            {post.comments === 1 ? 'comentario' : 'comentarios'}
          </span>
        </div>
      </PostTitleCard>

      <PostContent>
        <MarkdownConverter markdown={post.body} />
      </PostContent>
    </PostDetailsContainer>
  )
}
