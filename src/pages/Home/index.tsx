import { AuthorCard } from './components/AuthorCard'
import { PostCard } from './components/PostCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostList } from './styles'

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
      <AuthorCard />
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
