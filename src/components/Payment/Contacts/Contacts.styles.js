import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 16px 0;
  flex-direction: ${(p) => p.theme.rtl && 'row-reverse'};

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Label = styled.div`
  font-size: 15px;
  line-height: 24px;
  margin-right: ${(p) => !p.theme.rtl && '24px'};
  margin-left: ${(p) => p.theme.rtl && '24px'};

  @media screen and (max-width: 767px) {
    margin-right: ${(p) => !p.theme.rtl && '0'};
    margin-left: ${(p) => p.theme.rtl && '0'};
  }
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  line-height: 32px;
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 0.25s ease-in-out;
  &:hover {
    color: var(--color-font);
    text-decoration: none;
  }
  svg {
    margin-right: 12px;
  }
`;

const Email = styled(ContactLink)`
  margin-right: ${(p) => !p.theme.rtl && '24px'};
  margin-left: ${(p) => p.theme.rtl && '24px'};

  svg {
    font-size: 17px;
  }
  @media screen and (max-width: 767px) {
    margin-right: ${(p) => !p.theme.rtl && '0'};
    margin-left: ${(p) => p.theme.rtl && '0'};
  }
`;

const Phone = styled(ContactLink)`
  svg {
    font-size: 24px;
    transform: ${(p) => p.theme.rtl && 'scaleX(-1)'};
  }
`;

export { Wrapper, Label, Email, Phone };
