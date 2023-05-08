import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { AuthorCard } from './components/AuthorCard'
import { PostCard } from './components/PostCard'
import { SearchForm } from './components/SearchForm'
import { HomeContainer, PostList } from './styles'
import { NavLink } from 'react-router-dom'

interface Posts {
  id: number
  title: string
  content: string
  createdAt: string
}

export function Home() {
  const [posts, setPosts] = useState<Posts[]>([])
  const [postsCount, setPostsCount] = useState(0)

  const user = 'LuPeBreak'
  const repo = 'github-blog'
  async function fetchPosts(query?: string) {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:${user}/${repo} ${query || ''}`,
      },
    })
    const posts = response.data.items.map((post: any) => {
      return {
        id: post.number,
        title: post.title,
        content: `${post.body.substring(0, 250)} ...`,
        createdAt: post.created_at,
      }
    })
    setPostsCount(response.data.total_count)
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <HomeContainer>
      <AuthorCard />
      <SearchForm fetchPosts={fetchPosts} postsCount={postsCount} />
      <PostList>
        {posts.map((post) => {
          return (
            <NavLink key={post.id} to={`post/${post.id}`}>
              <PostCard
                title={post.title}
                content={post.content}
                date={new Date(post.createdAt)}
              />
            </NavLink>
          )
        })}
      </PostList>
    </HomeContainer>
  )
}
