import { PostCard } from './components/PostCard'
import { SearchForm } from './components/SearchForm'
import { AuthorCard, HomeContainer, PostList } from './styles'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'

export function Home() {
  const postsTemp = [
    {
      id: 0,
      title: 'JavaScript data types and data structures',
      content:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
    {
      id: 1,
      title: 'JavaScript data types and data structures',
      content:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
    {
      id: 2,
      title: 'JavaScript data types and data structures',
      content:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
    {
      id: 3,
      title: 'JavaScript data types and data structures',
      content:
        'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in ',
    },
  ]
  return (
    <HomeContainer>
      <AuthorCard>
        <img src="https://github.com/LuPeBreak.png" alt="Foto do autor" />
        <div>
          <header>
            <h1>Luis Felipe</h1>
            <a href="">
              GITHUB <FaExternalLinkAlt size={12} />
            </a>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div>
            <span>
              <FaGithub size={18} /> Lupebreak
            </span>
            <span>
              <FaBuilding size={18} /> Trabalho
            </span>
            <span>
              <FaUserFriends size={18} /> 28 Seguidores
            </span>
          </div>
        </div>
      </AuthorCard>
      <SearchForm />
      <PostList>
        {postsTemp.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              date={new Date()}
            />
          )
        })}
      </PostList>
    </HomeContainer>
  )
}
