import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

export const HomePage: React.FC = () => (
  <DefaultLayout title="Home">
    <h1 className="m-4 rounded border border-gray-400 bg-gray-50 p-4 text-center">
      React Router DOM is working!
    </h1>
  </DefaultLayout>
);
