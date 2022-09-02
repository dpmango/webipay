import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon } from '@ui';
import { SessionStoreContext } from '@store';
import { Container, Wrapper, Logo, Merchant } from './Head.styles';

const Head = observer(({ className }) => {
  const { t } = useTranslation('payment', { keyPrefix: 'head' });
  const sessionContext = useContext(SessionStoreContext);

  return (
    <Container className={className}>
      <div className="container narrow">
        <Wrapper>
          <Logo>
            <SvgIcon name="logo" />
          </Logo>
          <Merchant>
            {t('merchant')} {sessionContext.merchant}
          </Merchant>
        </Wrapper>
      </div>
    </Container>
  );
});

export default Head;
