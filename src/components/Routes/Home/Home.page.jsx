import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SessionStoreContext } from '@store';

import { PaymentHead, PaymentSelect } from '@c/Payment';

const HomePage = observer(({ tab }) => {
  const uiContext = useContext(SessionStoreContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    uiContext.setMerchant(id);
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Webipay</title>
      </Helmet>

      <PaymentHead />
      <PaymentSelect />
    </>
  );
});

export default HomePage;
