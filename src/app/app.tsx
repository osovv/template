import './styles/tailwind.css';
import { Pages } from 'src/pages';
import { withProviders } from './providers';

export const App = withProviders(() => {
  return <Pages />;
});
