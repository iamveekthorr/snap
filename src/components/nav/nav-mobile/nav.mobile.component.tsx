import { FC, useEffect, useState, useRef } from 'react';

import NavigationToggleItem from '../../navigation-items/navigation.components';

import {
  CloseButtonContainer,
  MobileNavBar,
  Navigation,
  NavigationItems,
  NavigationOptionListItem,
  NavigationOptionsList,
  Overlay,
} from './nav.mobile.styles';

import { ReactComponent as HamBurger } from '../../../assets/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/icon-close-menu.svg';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

import { ReactComponent as Calendar } from '../../../assets/icon-calendar.svg';
import { ReactComponent as Reminders } from '../../../assets/icon-reminders.svg';
import { ReactComponent as ToDoList } from '../../../assets/icon-todo.svg';
import { ReactComponent as Planning } from '../../../assets/icon-planning.svg';

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
                <NavigationOptionsList>
                  <NavigationOptionListItem>
                    {' '}
                    <ToDoList title="todo list" />
                    todo list
                  </NavigationOptionListItem>
                  <NavigationOptionListItem>
                    <Calendar title="calendar" /> calendar
                  </NavigationOptionListItem>
                  <NavigationOptionListItem>
                    {' '}
                    <Reminders title="reminder" />
                    reminder
                  </NavigationOptionListItem>
                  <NavigationOptionListItem>
                    {' '}
                    <Planning title="planning" />
                    planning
                  </NavigationOptionListItem>
                </NavigationOptionsList>
              </NavigationToggleItem>
              <NavigationToggleItem itemName="company">
                <NavigationOptionsList>
                  <li>history</li>
                  <li>our team</li>
                  <li>blog</li>
                </NavigationOptionsList>
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
