import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './Layout';
import App from './App';
import NotFound from './NotFound';

export const routes = (
  <div>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/" />
      <Route path="/" component={App} />
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path="*" component={NotFound} />
  </div>
);
