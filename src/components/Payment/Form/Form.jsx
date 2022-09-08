import React, { useCallback, useContext, useMemo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Trans, useTranslation } from 'react-i18next';

import { SvgIcon, Input, Button } from '@ui';
import { SessionStoreContext } from '@store';
import {
  Container,
  Box,
  Head,
  Logo,
  Back,
  Merchant,
  Instruction,
  FormWrapper,
  FormField,
  FormCta,
} from './Form.styles';

import { PaymentContacts } from '@c/Payment';
import { useEffect } from 'react';

const Form = observer(({ className }) => {
  const [transferId, setTransferId] = useState('');
  const [showTransferError, setShowTransferError] = useState(false);

  const { t } = useTranslation('payment');
  const sessionContext = useContext(SessionStoreContext);

  const paymentOption = useMemo(() => {
    if (sessionContext.payId === '1') {
      return 'pandapay';
    } else if (sessionContext.payId === '2') {
      return 'wirepay';
    }
  }, [sessionContext.payId]);

  const fields = useMemo(() => {
    const { transferId, bankName, branchName, accountType, accountNumber, accountHolder, amount } =
      sessionContext.paymentData;

    const arr = [
      { label: t('form.bankName'), value: bankName },
      { label: t('form.branchName'), value: branchName },
      { label: t('form.accountType'), value: accountType },
      { label: t('form.accountNumber'), value: accountNumber },
      { label: t('form.accountHolder'), value: accountHolder },
      { label: t('form.amount'), value: amount },
    ];

    if (transferId) {
      arr.unshift({ label: t('form.id.label'), value: transferId, isBold: true });
    }
    return arr;
  }, [sessionContext.payId, sessionContext.paymentData]);

  const handleBackClick = useCallback(() => {
    sessionContext.setPay(null);
  }, []);

  const isValidTranferId = useMemo(() => {
    if (transferId.length <= 6) return false;
    if (!Number.isFinite(Number(transferId))) return false;

    return true;
  }, [transferId]);

  useEffect(() => {
    if (transferId.length) {
      setShowTransferError(true);
    }
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
            {/* {sessionContext.payId === '1' && (
              <FormField>
                <Input
                  bold
                  value={transferId}
                  helper={t('form.id.required')}
                  error={showTransferError && !isValidTranferId && t('form.id.error')}
                  label={t('form.id.label')}
                  onChange={(v) => setTransferId(v)}
                  copyBtn={true}
                />
              </FormField>
            )} */}

            {fields.map((field, idx) => (
              <FormField key={idx} onClick={() => setShowTransferError(true)}>
                <Input
                  value={field.value}
                  label={field.label}
                  disabled
                  bold={field.isBold}
                  copyBtn={true}
                />
              </FormField>
            ))}

            <FormCta>
              <Button theme="primary" onClick={() => sessionContext.resetSession()}>
                {t('form.close')}
              </Button>
            </FormCta>
          </FormWrapper>

          <PaymentContacts />
        </Box>
      </div>
    </Container>
  );
});

export default Form;
