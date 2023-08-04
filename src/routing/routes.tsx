import { lazy, Route } from '@anansi/router';
import { Controller } from '@data-client/react';

import { getTestEntity } from 'api/TestEntity';

const lazyPage = (pageName: string) =>
  lazy(
    () =>
      import(
        /* webpackChunkName: '[request]', webpackPrefetch: true */ `pages/${pageName}`
      ),
  );

export const namedPaths = {
  Home: '/',
  TestPage: '/test_page',
} as const;

export const routes: Route<Controller>[] = [
  {
    name: 'Home',
    component: lazyPage('Home'),
    async resolveData(controller) {
      await controller.fetch(getTestEntity);
    },
  },
];
