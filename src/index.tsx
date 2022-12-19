import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import './index.css'
import Main from './views/Main'
import Ferrita from './views/Ferrita'
import Neodimio from './views/Neodimio'
import ALNICO from './views/ALNICO'
import SamarioCobalto from './views/SamarioCobalto'
import AplicacionesMagneticas from './views/AplicacionesMagneticas';

const router = createHashRouter([
  {
    path: '/',
    element: <Main/>,
  },
  {
    path: '/ferrita',
    element: <Ferrita/>
  },
  {
    path: '/neodimio',
    element: <Neodimio/>
  },
  {
    path: '/alnico',
    element: <ALNICO/>
  },
  {
    path: 'samarioCobalto',
    element: <SamarioCobalto/>
  },
  {
    path: 'aplicacionesMagneticas',
    element: <AplicacionesMagneticas/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
