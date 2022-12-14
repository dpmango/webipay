import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${(p) => p.theme.rtl && 'flex-direction: row-reverse'};
`;

const Label = styled.label`
  flex: 0 0 37%;
  display: block;
  font-size: 18px;
  line-height: 1.56;
  color: var(--color-font);
  font-weight: ${(p) => (!p.bold ? '400' : '700')};
  @media screen and (max-width: 767px) {
    flex-basis: 100%;
  }
`;

const Wrapper = styled.div`
  flex: 0 0 63%;
  position: relative;
  z-index: 1;

  textarea {
    resize: vertical;
  }
  input {
    appearance: none;
    display: block;
    width: 100%;
    background: white;
    font-family: var(--font);
    font-size: 16px;
    line-height: 24px;
    color: var(--color-font);
    border: 0;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0px;
    padding: 16px 12px 0px;
    backface-visibility: hidden;
    transition: border 0.25s ease-in-out, color 0.25s ease-in-out, background 0.25s ease-in-out;
    font-weight: ${(p) => (!p.bold ? '400' : '700')};

    &::placeholder {
      color: var(--color-gray);
    }

    &:focus {
      border-color: var(--color-primary);
    }

    ${(p) =>
      p.iconed &&
      `
        ${!p.theme.rtl && 'padding-right: 40px'};
        ${p.theme.rtl && 'padding-left: 40px'};
    `}

    ${(p) =>
      p.error &&
      `
      border-color: var(--color-red);
      color: var(--color-red);

      &::placeholder {
        color: rgba(var(--color-red), 0.5);
      }
    `}

    ${(p) =>
      p.theme.rtl &&
      `
      text-align: right;
    `};

    &[disabled] {
      color: var(--color-gray);
    }
  }
  input:disabled,
  textarea:disabled,
  input:disabled::placeholder,
  textarea:disabled::placeholder {
    -webkit-text-fill-color: currentcolor;
    opacity: 1;
  }
  @media screen and (max-width: 767px) {
    flex-basis: 100%;

    input {
      padding: 16px 0px 0px;
      ${(p) =>
        p.iconed &&
        `
        ${!p.theme.rtl && 'padding-right: 40px'};
        ${p.theme.rtl && 'padding-left: 40px'};
      `}
    }
  }
`;

const CopyMessage = styled.div`
  position: absolute;
  z-index: 2;
  bottom: calc(100% + 6px);
  right: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 32px;
  color: var(--color-gray);
  padding: 3px 8px;
  background: white;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  opacity: 0;
  white-space: nowrap;
  transition: opacity 0.25s ease;
  pointer-events: none;
`;

const CopyButton = styled.button`
  -webkit-appearance: none;
  position: absolute;
  z-index: 3;
  bottom: 0px;
  ${(p) => !p.theme.rtl && 'right: 0'};
  ${(p) => p.theme.rtl && 'left: 0'};
  font-size: 0;
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 6px 8px;
  color: var(--color-border);
  cursor: pointer;
  svg {
    font-size: 14px;
  }
  &:hover {
    color: var(--color-primary);
    ${CopyMessage} {
      opacity: 1;
      pointer-events: all;
    }
  }
  @media screen and (max-width: 767px) {
    ${(p) => !p.theme.rtl && 'right: 16px'};
    ${(p) => p.theme.rtl && 'left: 16px'};
  }
`;

const Helper = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 1;
  top: -8px;
  ${(p) => !p.theme.rtl && 'left: 12px'};
  ${(p) => p.theme.rtl && 'right: 12px'};
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  padding: 0 2px;
  background: rgba(80, 171, 254, 0.2);
  color: var(--color-primary);
  pointer-events: none;

  @media screen and (max-width: 767px) {
    ${(p) => !p.theme.rtl && 'left: 0'};
    ${(p) => p.theme.rtl && 'right:0'};
  }
`;

const Error = styled(Helper)`
  background: rgba(255, 0, 61, 0.1);
  color: var(--color-red);
`;

export { Container, Wrapper, CopyButton, CopyMessage, Label, Helper, Error };
