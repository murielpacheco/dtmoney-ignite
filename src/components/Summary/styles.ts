import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;

      font-size: 2rem;
      font-weight: normal;
      line-height: 3rem;
      margin-top: 1rem;
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
    
  }
`;
