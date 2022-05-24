import { FC } from 'react';
import { Nav, NavList, NavListItem } from './nav.desktop.styles';

const DesktopNav: FC = () => (
  <Nav>
    <NavList>
      <NavListItem>features</NavListItem>
      <NavListItem>company</NavListItem>
      <NavListItem>careers</NavListItem>
      <NavListItem>about</NavListItem>
    </NavList>
  </Nav>
);

export default DesktopNav;
