import { FC, ReactNode } from 'react';
import Main from './layout.styles';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => <Main>{children}</Main>;

export default Layout;
