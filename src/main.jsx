import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Banner from './components/Banner/Banner';
import FeatureDetails from './components/FeatureDetails/FeatureDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';
import AppliedJob from './components/AppliedJob/AppliedJob';
import featureDataDetails from './loaders/featureDataDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Banner />
      },
      {
        path: '/feature/:featureId',
        element: <FeatureDetails />,
        loader: ({ params }) => fetch("data.json")
      },
      {
        path: '/statistic',
        element: <Statistics />
      },
      {
        path: '/applied',
        element: <AppliedJob />,
        loader: featureDataDetails
      },
      {
        path: '/blog',
        element: <Blogs />
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
