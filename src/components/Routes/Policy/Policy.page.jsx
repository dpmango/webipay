import React from 'react';
import { Helmet } from 'react-helmet';

import { PolicyText } from '@c/Static';

const PolicyPage = ({ tab }) => {
  return (
    <>
      <Helmet>
        <title>Webipay - Policy</title>
      </Helmet>

      <PolicyText />
    </>
  );
};

export default PolicyPage;
