import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { Container } from './Footer.styles';

const Footer = observer(({ className }) => {
  const { t } = useTranslation('footer');

  return (
    <>
      <Container className={className}>
        <div className="container">
          <p>{t('top')}</p>
          <p>{t('poweredby')}</p>
          <p>
            {t('copyright')}
            <br />
            <Link to="/policy">{t('policies')}</Link>
          </p>
        </div>
      </Container>
    </>
  );
});

export default Footer;
