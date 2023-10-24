import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';
import Loader from '../Loader/Loader';

import { Main, MainWrapper } from './Layout.styled';

function Layout() {
  return (
    <MainWrapper>
      <SideBar />
      <Main>
        <Suspense fallback={<Loader type={'suspense'} />}>
          <Outlet />
        </Suspense>
      </Main>
    </MainWrapper>
  );
}

export default Layout;
