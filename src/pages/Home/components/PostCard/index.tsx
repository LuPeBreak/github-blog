import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { MarkdownConverter } from '../../../../components/MarkdownConverter'

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
      <MarkdownConverter markdown={content} />
    </PostCardContainer>
  )
}
