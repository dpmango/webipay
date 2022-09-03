import React, { useCallback, useContext, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon, Input, Button } from '@ui';
import { SessionStoreContext } from '@store';
import {
  Container,
  Box,
  Head,
  Logo,
  Merchant,
  Instruction,
  FormWrapper,
  FormField,
  FormCta,
} from './Form.styles';
import { Back } from '@styles/Shared.styles';

import { PaymentContacts } from '@c/Payment';

const Form = observer(({ className, payId }) => {
  const [transferId, setTransferId] = useState('');
  const { t } = useTranslation('payment');
  const sessionContext = useContext(SessionStoreContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const paymentOption = useMemo(() => {
    if (payId === '1') {
      return 'pandapay';
    } else if (payId === '2') {
      return 'wirepay';
    }
  }, [payId]);

  const fields = useMemo(() => {
    return [
      { label: t('form.bankName'), value: 'SBI' },
      { label: t('form.branchName'), value: 'ADB BARWALA' },
      { label: t('form.accountType'), value: 'Savings Account' },
      { label: t('form.accountNumber'), value: '3025766' },
      { label: t('form.accountHolder'), value: 'Testing Name' },
      { label: t('form.amount'), value: '6000.00 JPY' },
    ];
  }, [payId]);

  const handleBackClick = useCallback(() => {
    const id = searchParams.get('id');
    setSearchParams({ id: id });
  }, [searchParams]);

  const isValidTranferId = useMemo(() => {
    if (transferId.length <= 6) return false;
    if (!Number.isFinite(Number(transferId))) return false;

    return true;
  }, [transferId]);

  return (
    <Container className={className}>
      <div className="container narrow">
        <Box>
          <Head>
            <Back onClick={handleBackClick}>
              <SvgIcon name="arrow-back" />
              <span>{t('head.back')}</span>
            </Back>
            <Logo name={paymentOption}>
              <SvgIcon name={paymentOption} />
            </Logo>
            <Merchant>
              <Trans t={t} i18nKey={t(`options.${paymentOption}.title`)} />
            </Merchant>
          </Head>

          <Instruction>
            <Trans t={t} i18nKey={t(`options.${paymentOption}.instruction`)} />
          </Instruction>

          <FormWrapper>
            {payId === '1' && (
              <FormField>
                <Input
                  bold
                  value={transferId}
                  helper={t('form.id.required')}
                  error={!isValidTranferId && t('form.id.error')}
                  label={t('form.id.label')}
                  onChange={(v) => setTransferId(v)}
                  copyBtn={true}
                />
              </FormField>
            )}

            {fields.map((field, idx) => (
              <FormField key={idx}>
                <Input value={field.value} label={field.label} disabled copyBtn={true} />
              </FormField>
            ))}

            <FormCta>
              <Button theme="primary">{t('form.close')}</Button>
            </FormCta>
          </FormWrapper>

          <PaymentContacts />
        </Box>
      </div>
    </Container>
  );
});

export default Form;
