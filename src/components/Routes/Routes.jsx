import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '@c/Layout/';
import { Home, Policy } from '@c/Routes';

const Router = () => (
  <BrowserRouter>
    <Layout variant="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;
