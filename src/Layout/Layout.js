import React from 'react';
import { Header } from "./Header";
import { Main } from './Main';

export const Layout = ({component}) => {
  return (
    <>
      <Header />
      <Main>
        {component}
      </Main>
    </>
  );
};
