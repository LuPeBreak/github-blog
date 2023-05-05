import styled from 'styled-components'

export const PostDetailsContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const PostTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  & > nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;
  }
  & > h1 {
    color: ${(props) => props.theme['base-title']};
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  & > div {
    display: flex;
    gap: 2rem;
    color: ${(props) => props.theme['base-span']};

    & > span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const PostContent = styled.div`
  width: 100%;
  padding: 2.5rem 2rem;

  p,
  ul {
    margin-bottom: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
  }
`
