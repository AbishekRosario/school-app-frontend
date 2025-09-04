import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './custom-css/sidebar.css';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './AppRoutes'; // (extract your Routes into this file)

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <ToastContainer />
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
