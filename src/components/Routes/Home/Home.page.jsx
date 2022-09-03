import React, { useContext, useMemo, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SessionStoreContext } from '@store';

import { PaymentHead, PaymentForm, PaymentSelect } from '@c/Payment';

const HomePage = observer(({ tab }) => {
  const uiContext = useContext(SessionStoreContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  useEffect(() => {
    uiContext.setMerchant(id);
  }, [id]);

  const payId = useMemo(() => {
    const pay = searchParams.get('pay');

    return pay;
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Webipay</title>
      </Helmet>

      <PaymentHead />
      {payId ? <PaymentForm payId={payId} /> : <PaymentSelect />}
    </>
  );
});

export default HomePage;
