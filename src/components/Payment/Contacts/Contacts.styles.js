import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px 0;
`;

const Label = styled.div`
  font-size: 15px;
  line-height: 24px;
  margin-right: 24px;
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  line-height: 32px;
  color: var(--color-primary);
  transition: color 0.25s ease-in-out;
  &:hover {
    color: var(--color-font);
  }
  svg {
    margin-right: 12px;
  }
`;

const Email = styled(ContactLink)`
  margin-right: 24px;
  svg {
    font-size: 17px;
  }
`;

const Phone = styled(ContactLink)`
  svg {
    font-size: 24px;
  }
`;

export { Wrapper, Label, Email, Phone };
