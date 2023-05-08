import { useEffect, useState } from 'react'
import { BaseLink } from '../../../../styles/baseComponents'
import { AuthorCardContainer } from './styles'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'
import { api } from '../../../../lib/axios'

interface Author {
  name: string
  login: string
  avatarURL: string
  githubURL: string
  company: string
  followers: number
  bio: string
}

export function AuthorCard() {
  const [author, setAuthor] = useState<Author>()

  const user = 'lupebreak'
  async function getAuthorData() {
    const { data } = await api.get(`/users/${user}`)

    setAuthor({
      avatarURL: data.avatar_url,
      company: data.company,
      followers: data.followers,
      githubURL: data.html_url,
      login: data.login,
      name: data.name,
      bio: data.bio,
    })
  }

  useEffect(() => {
    getAuthorData()
  }, [])

  return (
    <AuthorCardContainer>
      <img src={author?.avatarURL} alt="Foto do autor" />
      <div>
        <header>
          <h1>{author?.name}</h1>
          <BaseLink to={author?.githubURL || ''}>
            <span>github</span> <FaExternalLinkAlt size={12} />
          </BaseLink>
        </header>
        <p>{author?.bio}</p>
        <div>
          <span>
            <FaGithub size={18} /> {author?.login}
          </span>
          {author?.company !== null ? (
            <span>
              <FaBuilding size={18} /> {author?.company}
            </span>
          ) : (
            ''
          )}
          <span>
            <FaUserFriends size={18} /> {author?.followers} Seguidores
          </span>
        </div>
      </div>
    </AuthorCardContainer>
  )
}
