import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  margin: 46px 0px 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  @media screen and (max-width: 767px) {
    justify-content: center;
    padding: 0;
  }
  ${(p) =>
    p.theme.rtl &&
    `
    flex-direction: row-reverse;
  `};
`;

const Logo = styled.div`
  font-size: 0;
  padding-right: ${(p) => !p.theme.rtl && '20px'};
  padding-left: ${(p) => p.theme.rtl && '20px'};
  svg {
    font-size: 23px;
  }
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Merchant = styled.div`
  font-size: 18px;
  line-height: 1.55;
  color: var(--color-gray);
  span {
    color: var(--color-font);
  }
`;

export { Container, Wrapper, Logo, Merchant };
