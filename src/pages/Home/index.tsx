import { AuthorCard, HomeContainer, PostList, SearchForm } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <AuthorCard>
        <img src="https://github.com/LuPeBreak.png" alt="Foto do autor" />
        <div>
          <header>
            <h1>Luis Felipe</h1>
            <a href=""> GITHUB ICONE</a>
          </header>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div>
            <p>Icone Lupebreak</p>
            <p>Icone Trabalho</p>
            <p>Icone 28 Seguidores</p>
          </div>
        </div>
      </AuthorCard>
      <SearchForm>
        <h2>SearchForm</h2>
      </SearchForm>
      <PostList>
        <h2>PostList</h2>
      </PostList>
    </HomeContainer>
  )
}
