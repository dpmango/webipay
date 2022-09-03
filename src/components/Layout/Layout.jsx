import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import Header from '@c/Layout/Header';
import Footer from '@c/Layout/Footer';

import { Page, Main } from './Layout.styles';

const Layout = ({ variant, children }) => {
  const { t, i18n } = useTranslation();

  const isRtl = useMemo(() => {
    const rtlKeys = ['ar'];
    return rtlKeys.includes(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    document.body.classList[isRtl ? 'add' : 'remove']('rtl');
  }, [isRtl]);

  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language);
  }, [i18n.language]);

  const theme = {
    rtl: isRtl,
  };

  return (
    <ThemeProvider theme={theme}>
      <Page variant={variant}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default Layout;
