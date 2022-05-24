import { FC, useEffect, useState, useRef } from 'react';

import {
  CloseButtonContainer,
  MobileNavBar,
  Navigation,
  NavigationItems,
  NavigationItemsOptions,
  Overlay,
} from './nav.mobile.styles';

import { ReactComponent as HamBurger } from '../../../assets/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icon-close-menu.svg';
import { ReactComponent as Logo } from '../../../assets/logo.svg';
import { ReactComponent as ArrowUp } from '../../../assets/icon-arrow-down.svg';
import { ReactComponent as ArrowDown } from '../../../assets/icon-arrow-up.svg';

const MobileNav: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isOptionOpen, setOptionOpen] = useState<boolean>(false);

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
              <NavigationItemsOptions
                role="navigation"
                onClick={() => setOptionOpen((next) => !next)}
              >
                <p>features {isOptionOpen ? <ArrowDown /> : <ArrowUp />}</p>
                {isOptionOpen && (
                  <ul>
                    <li>todo list</li>
                    <li>calendar</li>
                    <li>reminder</li>
                    <li>planning</li>
                  </ul>
                )}
              </NavigationItemsOptions>
              <NavigationItemsOptions role="navigation">
                <p> company {isOptionOpen ? <ArrowDown /> : <ArrowUp />}</p>
              </NavigationItemsOptions>
              <NavigationItemsOptions role="navigation">
                careers
              </NavigationItemsOptions>
              <NavigationItemsOptions role="navigation">
                about
              </NavigationItemsOptions>
            </NavigationItems>
          </Navigation>
        </>
      )}
    </MobileNavBar>
  );
};

export default MobileNav;
