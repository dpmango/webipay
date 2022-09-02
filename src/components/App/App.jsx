import React, { useCallback, useContext } from 'react';
import { observer } from 'mobx-react-lite';

import { LoaderContextProvider } from '@ui';

import Routes from '@c/Routes';

const App = observer(() => {
  return (
    <LoaderContextProvider>
      <Routes />
    </LoaderContextProvider>
  );
});

export default App;
