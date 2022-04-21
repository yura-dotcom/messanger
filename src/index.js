import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain="dev-voe9-vjq.us.auth0.com"
        clientId="Vrd8X2r8IKhn6ojsUn4MI75HfSrIT6iX"
        redirectUri={window.location.origin}
        // redirectUri={window.location.href}
    >
        <App />
    </Auth0Provider>
);

