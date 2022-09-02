import React, { lazy, Suspense, useContext } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

import Layout from '@c/Layout/';
import { Home } from '@c/Routes';

const Router = () => (
  <BrowserRouter>
    <Layout variant="main">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
