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

export function PostDetails() {
  const { postId } = useParams()

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
        <h1>JavaScript data types and data structures {postId}</h1>
        <div>
          <span>
            <FaGithub size={18} /> Lupebreak
          </span>
          <span>
            <FaCalendarDay size={18} /> Há 1 dia
          </span>
          <span>
            <FaComment size={18} /> 5 comentarios
          </span>
        </div>
      </PostTitleCard>

      <PostContent>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <br />
        <p>
          Dynamic typing <br /> JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </p>
      </PostContent>
    </PostDetailsContainer>
  )
}
