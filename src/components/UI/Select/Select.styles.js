import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${(p) => p.theme.rtl && 'flex-direction: row-reverse'};
`;

const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 300vh;
  z-index: 3;
  background: #000;
  opacity: 0.5;
  pointer-events: none;

  @media screen and (max-width: 767px) {
    display: ${(p) => p.open && 'block'};
  }
`;

const Label = styled.label`
  flex: 0 0 37%;
  display: block;
  font-size: 18px;
  line-height: 1.56;
  color: var(--color-font);
  @media screen and (max-width: 767px) {
    flex-basis: 100%;
  }
`;

const Wrapper = styled.div`
  flex: 0 0 100%;
  position: relative;
  z-index: 5;

  .react-select__control {
    font-weight: 400;
    font-size: 16px;
    color: var(--color-font);
    border: 1px solid transparent;
    min-height: 32px;
    background: var(--color-border);
    border-radius: 4px;

    &--menu-is-open {
      z-index: 10;
      .react-select__indicator {
        transform: rotate(180deg);
      }
    }

    &--is-focused,
    &--menu-is-open,
    &:hover {
      border-color: transparent;
      box-shadow: none;
    }
  }

  .react-select__value-container {
    padding: 12px 16px 12px 26px;
    font-size: 16px;
  }

  .react-select__indicator {
    color: var(--color-font);
    padding: 0;
    transition: transform 0.25s ease;

    svg {
      width: 14px;
      height: 14px;
    }
  }

  .react-select__single-value {
    overflow: visible;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__menu {
    z-index: 9999;
    right: 0;
    left: auto;
    background: #fff;
    box-shadow: none;
    border: 1px solid rgba(80, 171, 254, 0.2);
    box-shadow: 2px 2px 4px #cfcfcf;
    border-radius: 8px;
    margin-top: 0;
    margin-bottom: 0;
    min-width: 160px;
    overflow-y: auto;
  }
  .react-select__menu-list {
    padding: 0;
  }

  .react-select__option {
    font-weight: normal;
    font-size: 15px;
    line-height: 1.42;
    padding: 4px 12px;
    background: transparent;
    color: var(--color-font);
    border-bottom: 1px solid rgba(80, 171, 254, 0.2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: background 0.1s ease-in-out;
    &:last-child {
      border-bottom: 0;
    }
    &--is-selected {
      background: var(--color-primary);
      color: var(--color-white);
    }

    &--is-focused {
      background: rgba(80, 171, 254, 0.2);
      color: var(--color-font);
    }
  }

  ${(p) =>
    p.theme === 'ghost' &&
    `
    .react-select{
      &__control{
        background: transparent;
      }
      &__value-container{
        padding: 4px 12px 4px 0px;
        font-size: 15px;
      }
    }
  `}
`;

export { Container, Overlay, Wrapper, Label };
