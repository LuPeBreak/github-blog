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
import { MarkdownConverter } from './MarkdownConverter'

interface PostData {
  title: string
  body: string
  userLogin: string
  comments: number
  createdAt: string
}

export function PostDetails() {
  const { postId } = useParams()
  const [post, setPost] = useState<PostData>({} as PostData)
  let formattedDate = ''

  const GetPostData = useCallback(async () => {
    const response = await api.get(
      `/repos/lupebreak/github-blog/issues/${postId}`,
    )

    const data = response.data
    const postData: PostData = {
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

    if (post.createdAt) {
      const date = new Date(post.createdAt)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      formattedDate = formatDistanceToNow(date, {
        addSuffix: true,
        locale: ptBR,
      })
    }
  }, [GetPostData])

  console.log(post)

  return (
    <PostDetailsContainer>
      <PostTitleCard>
        <nav>
          <BaseLink>
            <FaChevronLeft size={12} /> <span>Voltar</span>
          </BaseLink>
          <BaseLink href="">
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
            <FaComment size={18} /> {post.comments} comentarios
          </span>
        </div>
      </PostTitleCard>

      <PostContent>
        <MarkdownConverter markdown={post.body} />
      </PostContent>
    </PostDetailsContainer>
  )
}
