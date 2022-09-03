import React, { useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon, Button } from '@ui';
import { Container, Box, Icon, Text, Cta } from './Error.styles';

const Error = ({ className }) => {
  const { t } = useTranslation('payment', { keyPrefix: 'errors' });
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container className={className}>
      <div className="container narrow">
        <Box>
          <Icon>
            <SvgIcon name="info" />
          </Icon>
          <Text>{t('badRequest')}</Text>
        </Box>

        <Cta>
          <Button theme="primary" onClick={() => setSearchParams({ id: 1 })}>
            {t('back')}
          </Button>
        </Cta>
      </div>
    </Container>
  );
};

export default Error;
