import React, { useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { SvgIcon } from '@ui';
import { Wrapper, Label, Email, Phone } from './Contacts.styles';

const Contacts = ({ className }) => {
  const { t } = useTranslation('payment', { keyPrefix: 'contacts' });

  return (
    <Wrapper className={className}>
      <Label>{t('title')}</Label>
      <Email href={`mailto:${t('email')}`}>
        <SvgIcon name="email" />
        {t('email')}
      </Email>
      <Phone href={`tel:${t('phone')}`}>
        <SvgIcon name="phone" />
        {t('phone')}
      </Phone>
    </Wrapper>
  );
};

export default Contacts;
