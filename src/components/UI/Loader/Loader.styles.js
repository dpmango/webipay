import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba($fontColor, 0.3);
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  will-change: opacity;
  backface-visibility: hidden;
  pointer-events: none;
  &.active {
    opacity: 0.5;
    pointer-events: all;
  }
`;

export { Wrapper };
