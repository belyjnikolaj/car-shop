import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, MainWrapper } from './Layout.styled';
import SideBar from 'components/SideBar/SideBar';
import Loader from 'components/Loader/Loader';

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
