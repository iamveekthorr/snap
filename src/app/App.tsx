import { ReactElement } from 'react';
import Layout from '../components/layout/layout.component';
import DesktopNav from '../components/nav/nav-desktop/nav.desktop.component';
import MobileNav from '../components/nav/nav-mobile/nav.mobile.component';
import useMediaQuery from '../hooks/useMediaQuery.hook';

function App(): ReactElement {
  const match: boolean = useMediaQuery('50rem');
  return <Layout>{match ? <DesktopNav /> : <MobileNav />}</Layout>;
}

export default App;
