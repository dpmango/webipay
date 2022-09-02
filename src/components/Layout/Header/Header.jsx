import React, { useContext, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';

import { SvgIcon, Avatar } from '@ui';
import { SessionStoreContext } from '@store';

import { Container, Wrapper, Back } from './Header.styles';

const Header = observer(({ className }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const { t } = useTranslation('header');

  const uiContext = useContext(SessionStoreContext);
  const { pathname } = useLocation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <Container>
        <div className="container">
          <Wrapper>
            <Back onClick={handleBackClick}>
              <SvgIcon name="arrow-back" />
              <span>{t('back')}</span>
            </Back>
          </Wrapper>
        </div>
      </Container>
    </>
  );
});

export default Header;
