import React, { useContext, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import cns from 'classnames';

import { SvgIcon, Avatar } from '@ui';

import { Container, Wrapper, Back } from './Footer.styles';

const Footer = observer(({ className }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const { t } = useTranslation('footer');

  return (
    <>
      <Container>
        <div className="container"></div>
      </Container>
    </>
  );
});

export default Footer;
