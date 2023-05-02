import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const AuthorCard = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 4.5rem;
  padding: 2rem;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  & > img {
    width: 9.25rem;
    height: 9.25rem;
  }

  & > div {
    & > header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;

      h1 {
        color: ${(props) => props.theme['base-title']};
        font-weight: 700;
        font-size: 1.5rem;
      }

      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.75rem;
        font-weight: 700;
        color: ${(props) => props.theme['brand-blue']};
        text-decoration: none;
      }
    }

    & > p {
      margin-bottom: 1.5rem;
    }

    & > div {
      display: flex;
      gap: 1.5rem;

      & > span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`

export const PostList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`
