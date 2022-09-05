import React, { useCallback, useContext, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon } from '@ui';
import { SessionStoreContext } from '@store';

import {
  Container,
  SelectTitle,
  SelectBox,
  Option,
  OptionLogo,
  OptionDescription,
  OptionCaret,
} from './Select.styles';

const options = [
  {
    id: 1,
    name: 'pandapay',
  },
  {
    id: 2,
    name: 'wirepay',
  },
  {
    id: 3,
    name: 'errorpay',
  },
];

const Select = observer(({ className }) => {
  const { t } = useTranslation('payment', { keyPrefix: 'options' });
  const sessionContext = useContext(SessionStoreContext);

  const handleOptionSelect = useCallback((payId) => {
    sessionContext.setPay(payId.toString());
  }, []);

  return (
    <Container className={className}>
      <div className="container narrow">
        <SelectTitle>{t('title')}</SelectTitle>
        <SelectBox>
          {options.map((option) => (
            <Option key={option.id} onClick={() => handleOptionSelect(option.id)}>
              <OptionLogo name={option.name}>
                <SvgIcon name={option.name} />
              </OptionLogo>
              <OptionDescription>
                <Trans t={t} i18nKey={t(`${option.name}.title`)} />
              </OptionDescription>
              <OptionCaret>
                <SvgIcon name="arrow-right" />
              </OptionCaret>
            </Option>
          ))}
        </SelectBox>
      </div>
    </Container>
  );
});

export default Select;
