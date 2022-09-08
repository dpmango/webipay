import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  margin-top: 28px;
  @media screen and (max-width: 767px) {
    margin-top: 0;
  }
`;

const SelectTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.14;
  text-align: center;
  margin: 32px 0;
  @media screen and (max-width: 767px) {
    font-size: 24px;
    margin: 24px 0;
  }
`;

const SelectBox = styled.div`
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid var(--color-border);
`;

const Option = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 32px 32px;
  cursor: pointer;
  transition: background 0.25s ease-in-out;
  &:hover {
    background: var(--color-background);
  }
  &::after {
    display: block;
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 32px;
    right: 32px;
    height: 1px;
    background: var(--color-border);
  }
  &:last-child {
    &::after {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 24px 32px;
  }
  ${(p) =>
    p.theme.rtl &&
    `
    flex-direction: row-reverse;
  `};
`;

const OptionLogo = styled.div`
  font-size: 0;
  flex: 0 0 45%;
  svg {
    font-size: ${(p) => p.name === 'pandapay' && '31px'};
    font-size: ${(p) => p.name === 'wirepay' && '29px'};
  }
  @media screen and (max-width: 767px) {
    flex-basis: 100%;
    svg {
      font-size: ${(p) => p.name === 'pandapay' && '36px'};
      font-size: ${(p) => p.name === 'wirepay' && '34px'};
    }
  }
`;

const OptionDescription = styled.div`
  flex: 0 0 calc(55% - 10px);
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    flex-basis: calc(100% - 10px);
  }
`;

const OptionCaret = styled.div`
  flex: 0 0 10px;
  text-align: center;
  font-size: 0;
  svg {
    font-size: 10px;
  }
  transform: ${(p) => p.theme.rtl && 'rotate(180deg)'};
`;

export { Container, SelectTitle, SelectBox, Option, OptionLogo, OptionDescription, OptionCaret };
