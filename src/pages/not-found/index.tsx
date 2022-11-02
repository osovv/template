import { Link } from 'atomic-router-react';
import { routes } from 'src/shared/routes';

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found</h1>
      <Link to={routes.home}>Back to home</Link>
    </div>
  );
};
