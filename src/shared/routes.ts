import { createRoute } from 'atomic-router';

export const routes = {
  home: createRoute(),
  errors: {
    notFound: createRoute(),
  },
};

// We need this so we can host on GitHub Pages. `template` is repo name
export const basePath = import.meta.env.BASE_URL.replace(/\/(?=[^/]*$)/, '');
