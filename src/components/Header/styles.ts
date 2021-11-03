import styled from 'styled-components';

export const Container = styled.header`
  background-color: #5429CC;

`;


export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;
  padding: 1.8rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;