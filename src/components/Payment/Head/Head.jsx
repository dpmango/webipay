import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon } from '@ui';
import { getEnv } from '@helpers';
import { SessionStoreContext } from '@store';
import { Container, Wrapper, Logo, Merchant } from './Head.styles';

import logo from '@assets/img/logo.png';
import logo2x from '@assets/img/logo@2x.png';

const Head = observer(({ className }) => {
  const { t } = useTranslation('payment', { keyPrefix: 'head' });
  const sessionContext = useContext(SessionStoreContext);

  return (
    <Container className={className}>
      <div className="container narrow">
        <Wrapper>
          <Logo>
            <img src={logo} srcSet={`${logo2x} 2x`} alt="logo" />
          </Logo>
          <Merchant>
            {t('merchant')} <span>{getEnv('MERCHANT')}</span>
          </Merchant>
        </Wrapper>
      </div>
    </Container>
  );
});

export default Head;
