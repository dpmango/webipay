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
  flex-direction: ${(p) => p.theme.rtl && 'row-reverse'};
`;

const Language = styled.div`
  margin-left: ${(p) => (p.theme.rtl ? '0' : 'auto')};
  margin-right: ${(p) => (p.theme.rtl ? 'auto' : '0')};
`;

export { Container, Wrapper, Language };
