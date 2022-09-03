import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 16px 32px 32px;
  ${(p) =>
    p.theme.rtl &&
    `
    flex-direction: row-reverse;
  `};
`;

const Icon = styled.div`
  font-size: 0;
  flex: 0 0 auto;
  margin-right: ${(p) => !p.theme.rtl && '32px'};
  margin-left: ${(p) => p.theme.rtl && '32px'};
  svg {
    font-size: 50px;
  }
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 1.55;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
`;

const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 32px 0;
`;

export { Container, Box, Icon, Text, Cta };
