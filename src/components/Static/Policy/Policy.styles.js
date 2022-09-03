import styled from 'styled-components';

const Container = styled.section`
  position: relative;
`;

const Title = styled.h1`
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

const Text = styled.div`
  font-size: 18px;
  line-height: 1.55;
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;

export { Container, Title, Text };
