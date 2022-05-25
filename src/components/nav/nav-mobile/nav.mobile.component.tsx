import { FC, useEffect, useState, useRef } from 'react';

import NavigationToggleItem from '../../navigation-items/navigation.components';

import {
  CloseButtonContainer,
  MobileNavBar,
  Navigation,
  NavigationItems,
  Overlay,
} from './nav.mobile.styles';

import { ReactComponent as HamBurger } from '../../../assets/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icon-close-menu.svg';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLSpanElement>(null);

  const closeNav = (e: Event): void => {
    if (ref.current === e.target) setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.addEventListener('click', closeNav);

    return () => document.removeEventListener('click', closeNav);
  });

  return (
    <MobileNavBar>
      <Logo />
      <HamBurger
        attributeName="hamburger menu"
        title="Hamburger"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ cursor: 'pointer' }}
      />
      {isOpen && (
        <>
          <Overlay ref={ref} />
          <Navigation>
            <CloseButtonContainer>
              <CloseIcon onClick={() => setIsOpen((prev) => !prev)} />
            </CloseButtonContainer>
            <NavigationItems>
              <NavigationToggleItem itemName="features">
                <ul>
                  <li>todo list</li>
                  <li>calendar</li>
                  <li>reminder</li>
                  <li>planning</li>
                </ul>
              </NavigationToggleItem>
              <NavigationToggleItem itemName="company">
                <ul>
                  <li>history</li>
                  <li>our team</li>
                  <li>blog</li>
                </ul>
              </NavigationToggleItem>
              <li role="navigation">careers</li>
              <li role="navigation">about</li>
            </NavigationItems>
          </Navigation>
        </>
      )}
    </MobileNavBar>
  );
};

export default MobileNav;
