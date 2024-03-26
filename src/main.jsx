import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import Layout from './component/Layout.jsx'
import PagesRead from './pages/PagesRead.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:'/reading',
        element:<PagesRead></PagesRead>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

    
  </React.StrictMode>,
)
