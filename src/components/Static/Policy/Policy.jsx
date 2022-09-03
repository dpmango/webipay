import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon } from '@ui';
import { SessionStoreContext } from '@store';
import { Container, Title, Text } from './Policy.styles';

const Policy = ({ className }) => {
  const { t } = useTranslation('page', { keyPrefix: 'policy' });

  return (
    <Container className={className}>
      <div className="container narrow">
        <Title>{t('title')}</Title>
        <Text>
          <Trans t={t} i18nKey={t('text')} />
        </Text>
      </div>
    </Container>
  );
};

export default Policy;
