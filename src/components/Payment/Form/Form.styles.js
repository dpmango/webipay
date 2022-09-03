import styled from 'styled-components';

const Container = styled.section`
  position: relative;
`;

const Box = styled.div`
  position: relative;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 16px 26px 16px 32px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  padding: 16px 0 32px;
`;

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
`;

const Logo = styled.div`
  font-size: 0;
  padding: 0 10px;
  svg {
    font-size: ${(p) => p.name === 'pandapay' && '31px'};
    font-size: ${(p) => p.name === 'wirepay' && '29px'};
  }
`;

const Merchant = styled.div`
  font-size: 15px;
  line-height: 24px;
`;

const Instruction = styled.p`
  margin: 16px 0 0;
  font-size: 15px;
  line-height: 24px;
`;

const FormWrapper = styled.div`
  margin-top: 46px;
`;

const FormField = styled.div`
  margin-top: 19px;
`;

const FormCta = styled.div`
  margin: 46px 0 40px;
  display: flex;
  justify-content: center;
  button {
    min-width: 136px;
  }
`;

export { Container, Box, Head, Back, Logo, Merchant, Instruction, FormWrapper, FormField, FormCta };
