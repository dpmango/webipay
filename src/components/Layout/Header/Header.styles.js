import styled from 'styled-components';

const Container = styled.header`
  display: block;
  z-index: 9;
  background: transparent;
  border-bottom: 1px solid var(--color-border);
  transition: transform 0.25s ease-in-out;
  will-change: transform;
  backface-visibility: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  transition: 0.25s ease-in-out;
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

export { Container, Wrapper, Back };
