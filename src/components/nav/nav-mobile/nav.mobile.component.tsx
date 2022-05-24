import { FC, useState } from 'react';

import { MobileNavBar, Navigation, Overlay } from './nav.mobile.styles';

import { ReactComponent as HamBurger } from '../../../assets/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icon-close-menu.svg';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MobileNavBar>
      <Logo />
      <HamBurger
        attributeName="hamburger menu"
        title="Hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <>
          <Overlay />
          <Navigation>
            <CloseIcon onClick={() => setIsOpen((prev) => !prev)} />
            <ul>
              <li>features</li>
              <li>careers</li>
              <li>about</li>
            </ul>
          </Navigation>
        </>
      )}
    </MobileNavBar>
  );
};

export default MobileNav;
