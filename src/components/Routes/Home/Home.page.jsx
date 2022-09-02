import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Helmet } from 'react-helmet';
import { UiStoreContext } from '@store';

const HomePage = observer(({ tab }) => {
  // const uiContext = useContext(UiStoreContext);

  return (
    <>
      <Helmet>
        <title>APP</title>
      </Helmet>
    </>
  );
});

export default HomePage;
