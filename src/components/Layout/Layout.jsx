import React from 'react';
import cns from 'classnames';

import Header from '@c/Layout/Header';
import Footer from '@c/Layout/Footer';

import { Page, Main } from './Layout.styles';

const Layout = ({ variant, children }) => {
  return (
    <Page variant={variant}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Page>
  );
};

export default Layout;
