import styled from 'styled-components';

export const MobileNavBar = styled.header`
  grid-row: header;
  grid-column: full-bleed;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  position: relative;
`;

export const Navigation = styled.nav`
  height: 100vh;
  padding: calc(32rem / 26) calc(48rem / 16);
  position: absolute;
  top: 0;
  right: 0;
  background-color: hsl(0, 0%, 98%);
  z-index: 2;
  width: min-content;
`;

export const Overlay = styled.span`
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100vh;
  width: 100vw;
`;
