import { FC, ReactElement } from 'react';

import useToggle from '../../hooks/useToggle.hook';

import { NavigationItemsOptions } from './navigation.styles';

import { ReactComponent as ArrowUp } from '../../assets/icon-arrow-down.svg';
import { ReactComponent as ArrowDown } from '../../assets/icon-arrow-up.svg';

interface INavigationItemsProps {
  children: ReactElement;
  itemName: string;
}

const NavigationToggleItem: FC<INavigationItemsProps> = ({
  itemName,
  children,
}) => {
  const [toggle, doToggle] = useToggle();

  return (
    <NavigationItemsOptions onClick={doToggle}>
      <p>
        {itemName} {toggle ? <ArrowDown /> : <ArrowUp />}
      </p>
      {toggle && children}
    </NavigationItemsOptions>
  );
};

export default NavigationToggleItem;
