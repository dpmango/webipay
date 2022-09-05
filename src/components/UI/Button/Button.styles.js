import styled from 'styled-components';

const Styled = styled.button`
  -webkit-appearance: none;
  display: inline-flex;
  justify-content: center;
  font-family: var(--font);
  font-weight: 500;
  font-size: 16px;
  line-height: 2;
  padding: 12px 32px;
  border-radius: 8px;
  border: 0;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.25s ease-in-out, color 0.25s ease-in-out;

  &._primary {
    background: var(--color-primary);
    color: var(--color-font);

    &:hover {
      background: #0562B8;
      color: var(--color-white);
    }

    &._outline {
      background: transparent;
      border: 2px solid var(--color-primary);
      padding: 14px 24px;
      color: var(--color-primary);

      &:hover {
        color: white;
        background: var(--color-primary);
      }
    }

    &[disabled] {
      color: rgba(#000, 0.3);
      border-color: rgba(#000, 0.3);
      cursor: not-allowed;
      pointer-events: none;

      &:hover {
        background: transparent;
        color: rgba(#000, 0.3);
        border-color: rgba(#000, 0.3);
      }
    }
  }

  // variants
  &._small {
    padding: 7px 15px;
    font-size: 14px;
    border-radius: 8px;
  }

  &._big {
    padding: 18px 15px;
    border-radius: 12px;
  }

  &._block {
    display: block;
    width: 100%;
  }

  &._iconed {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &._iconLeft {
    svg {
      margin-right: 16px;
    }
  }

  &._iconRight {
    svg {
      margin-left: 16px;
    }
  }

  &._loading {
    position: relative;
    // font-size: 0;
    color: transparent;

    .spinner {
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }

  &[disabled] {
    background: var(--color-border);
    color: var(--color-font);
    cursor: not-allowed;
    pointer-events: none;

    &:hover {
      background: var(--color-border);
    }
  }
}
`;

export { Styled };
