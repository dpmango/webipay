import styled from 'styled-components';

const Container = styled.header`
  display: block;
  z-index: 9;
  background: transparent;
  border-bottom: 1px solid var(--color-border);
  transition: transform 0.25s ease-in-out;
  will-change: transform;
  backface-visibility: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  transition: 0.25s ease-in-out;
  flex-direction: ${(p) => p.theme.rtl && 'row-reverse'};
`;

const Logo = styled.div`
  font-size: 0;
  display: none;
  svg {
    font-size: 23px;
  }
  @media screen and (max-width: 767px) {
    display: block;
  }
`;

const Language = styled.div``;

export { Container, Wrapper, Logo, Language };
