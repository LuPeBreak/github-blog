import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PostList = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};
  }
`
