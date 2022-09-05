import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon, Button } from '@ui';
import { SessionStoreContext } from '@store';
import { Container, Box, Icon, Text, Cta } from './Error.styles';

const Error = observer(({ className }) => {
  const { t } = useTranslation('payment', { keyPrefix: 'errors' });
  const sessionContext = useContext(SessionStoreContext);

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
          <Button theme="primary" onClick={() => sessionContext.resetSession()}>
            {t('back')}
          </Button>
        </Cta>
      </div>
    </Container>
  );
});

export default Error;
