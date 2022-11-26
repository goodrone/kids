import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Letters from './Letters';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";

function Selector() {
  return (
    <ul className="menu">
      <li>Letters:{" "}
        <a href="/letters/en">English</a>,{" "}
        <a href="/letters/de">Deutsch</a>,{" "}
        <a href="/letters/ru">Русский</a></li>
    </ul>
  );
}

function NotFound() {
  const error = useRouteError();
  console.log(error);
  return <>{error.status} {error.statusText}</>;
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound/>,
    element: <Selector/>,
  },
  {
    path: "letters",
    element: <Letters/>,
  },
  {
    path: "letters/:lang",
    element: <Letters/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
