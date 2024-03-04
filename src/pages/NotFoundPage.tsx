import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

export const NotFoundPage: React.FC = () => (
  <DefaultLayout title="404">
    <h1 className="m-4 rounded border border-gray-400 bg-gray-50 p-4 text-center">
      404
    </h1>
  </DefaultLayout>
);
