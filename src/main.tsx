import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { GlobalProvider } from 'navigation-bar-generator';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuthenticated = true;
const packageType = 'premium';
const role = 'admin';

root.render(
  <StrictMode>
    <GlobalProvider isAuthenticated={isAuthenticated} packageType={packageType} role={role}>
        <App />
    </GlobalProvider>
  </StrictMode>
);
