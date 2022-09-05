import React, { useContext, useMemo, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import { SessionStoreContext } from '@store';

import { PaymentHead, PaymentForm, PaymentSelect, PaymentError } from '@c/Payment';

const HomePage = observer(({ tab }) => {
  const sessionContext = useContext(SessionStoreContext);

  return (
    <>
      <Helmet>
        <title>Webipay</title>
      </Helmet>

      <PaymentHead />
      {sessionContext.payId ? <PaymentForm /> : <>{!sessionContext.error && <PaymentSelect />}</>}
      {sessionContext.error && <PaymentError />}
    </>
  );
});

export default HomePage;
