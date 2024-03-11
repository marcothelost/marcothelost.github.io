import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Button } from '@components/elements/Button';

export const HomePage: React.FC = () => (
  <DefaultLayout title="Home">
    <div className="flex h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold">Skibidi Toilet</h1>
        <p className="mt-4 max-w-96 opacity-70">
          This is a funny compilation of skibidi toilet videos. Laugh and cry,
          pour mayonnaise onto your thighs!
        </p>
        <div className="mt-6 flex gap-2">
          <Button text="Skib?!" variant="primary" icon="eye" />
          <Button text="Skibidi!" icon="user" />
        </div>
      </div>
    </div>
  </DefaultLayout>
);
