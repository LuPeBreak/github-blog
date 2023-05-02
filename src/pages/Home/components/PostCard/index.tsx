import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface PostCardProps {
  title: string
  content: string
  date: Date
}

export function PostCard({ title, date, content }: PostCardProps) {
  return (
    <PostCardContainer>
      <div>
        <h2>{title}</h2>
        <span>
          {formatDistanceToNow(date, {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{content}...</p>
    </PostCardContainer>
  )
}
