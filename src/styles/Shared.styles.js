import styled from 'styled-components';

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

export { Back };
