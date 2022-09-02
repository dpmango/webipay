import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  margin: 46px 0px 48px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

const Logo = styled.div`
  font-size: 0;
  padding-right: 20px;
  svg {
    font-size: 23px;
  }
`;

const Merchant = styled.div`
  font-size: 18px;
  line-height: 28px;
`;

export { Container, Wrapper, Logo, Merchant };
