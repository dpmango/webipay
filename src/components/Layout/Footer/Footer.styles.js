import styled from 'styled-components';

const Container = styled.footer`
  position: relative;
  z-index: 2;
  background: var(--color-navy);
  color: white;
  padding: 80px 0;
  text-align: center;
  p {
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    & + p {
      margin-top: 1em;
    }
    a {
      color: var(--color-link);
    }
  }
`;

export { Container };
