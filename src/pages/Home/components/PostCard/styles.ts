import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1.25rem;
  padding: 2rem;
  max-width: 26rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  & > div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-title']};
      max-width: 70%;
    }
    span {
      font-size: 0%.875rem;
      color: ${(props) => props.theme['base-span']};

      &::first-letter {
        text-transform: capitalize;
      }
    }
  }
`
