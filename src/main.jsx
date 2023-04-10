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
import CategoryList from './components/CategoryList/CategoryList';
import FeatureDetails from './components/FeatureDetails/FeatureDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Banner/>
      },
      {
        path:'/feature/:featureId',
        element: <FeatureDetails/>,
        loader: () => fetch("data.json")
      }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
