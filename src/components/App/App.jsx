import React, { useCallback, useContext } from 'react';

import { LoaderContextProvider } from '@ui';

import Routes from '@c/Routes';

const App = () => {
  return (
    <LoaderContextProvider>
      <Routes />
    </LoaderContextProvider>
  );
};

export default App;
