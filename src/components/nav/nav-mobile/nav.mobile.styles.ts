import styled, { keyframes } from 'styled-components';

const slideInFromRight = keyframes`
  from { width: 0%; }
  to { width: 60%;  }
`;

export const MobileNavBar = styled.header`
  grid-row: header;
  grid-column: full-bleed;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 15px;
`;

export const Navigation = styled.nav`
  height: 100vh;
  padding: calc(22rem / 16);
  position: absolute;
  top: 0;
  right: 0;
  background-color: hsl(0, 0%, 98%);
  z-index: 2;
  width: 60%;
  animation: ${slideInFromRight} 0.4s cubic-bezier(0, 1.61, 0.81, 0.83);
  box-sizing: content-box;
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

export const NavigationItems = styled.ul`
  text-transform: capitalize;
  font-size: calc(16.5rem / 16);
  font-weight: 700;
  color: hsl(0, 0%, 41%);

  & > :not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const NavigationItemsOptions = styled.li`
  list-style: none;
  cursor: pointer;

  & > p {
    display: flex;
    align-items: center;

    & > svg {
      margin-left: calc(16rem / 16);
    }
  }
`;

export const CloseButtonContainer = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: calc(32rem / 16);
  cursor: pointer;
`;
