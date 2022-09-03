import React from 'react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import { Container } from './Footer.styles';

const Footer = ({ className }) => {
  const { t } = useTranslation('footer');

  return (
    <Container className={className}>
      <div className="container">
        <p>
          <Trans t={t} i18nKey={t('top')} />
        </p>
        <p>{t('poweredby')}</p>
        <p>
          {t('copyright')}
          <br />
          <Link to="/policy">{t('policies')}</Link>
        </p>
      </div>
    </Container>
  );
};

export default Footer;
