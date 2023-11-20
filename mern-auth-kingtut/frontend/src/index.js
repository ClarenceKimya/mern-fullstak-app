import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'
import { GoogleOAuthProvider } from '@react-oauth/google'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="834901143691-mh82b2tavqt6ostub3kpq087qq01vsvm.apps.googleusercontent.com">
      <AuthContextProvider>
        <WorkoutsContextProvider>
          <App />
        </WorkoutsContextProvider>
      </AuthContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
