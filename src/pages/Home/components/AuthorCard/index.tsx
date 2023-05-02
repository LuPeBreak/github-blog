import { AuthorCardContainer } from './styles'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends,
} from 'react-icons/fa'

export function AuthorCard() {
  return (
    <AuthorCardContainer>
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
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
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
    </AuthorCardContainer>
  )
}
