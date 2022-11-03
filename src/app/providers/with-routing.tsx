import { createHistoryRouter } from 'atomic-router';
import { RouterProvider } from 'atomic-router-react';
import { createBrowserHistory } from 'history';
import React from 'react';
import { notFoundRoute, routesMap } from '~/pages';
import { basePath } from '~/shared/routes';

const history = createBrowserHistory();

// eslint-disable-next-line no-console
console.log(`basePath: '${basePath}'`);

const router = createHistoryRouter({
  base: basePath,
  routes: routesMap,
  notFoundRoute,
});

router.setHistory(history);

export const withRouting = (children: () => React.ReactNode) => () => {
  return <RouterProvider router={router}>{children()}</RouterProvider>;
};
