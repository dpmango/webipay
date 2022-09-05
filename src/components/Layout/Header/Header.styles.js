import styled from 'styled-components';

const Container = styled.header`
  position: relative;
  z-index: 2;
  display: block;
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
  @media screen and (max-width: 767px) {
    padding-top: 48px;
  }
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

const Back = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: var(--color-primary);
  }
  svg {
    flex: 0 0 auto;
    font-size: 10px;
    margin-right: 7px;
  }
  ${(p) =>
    p.theme.rtl &&
    `
    flex-direction: row-reverse;
    svg{
      margin-right: 0;
      margin-left: 7px;
      transform: rotate(180deg);
    }
  `};
`;

export { Container, Wrapper, Logo, Language, Back };
