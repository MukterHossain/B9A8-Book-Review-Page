import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import Layout from './component/Layout.jsx'
import PagesRead from './pages/PagesRead.jsx'
import BookDetails from './pages/BookDetails.jsx'
import ErrorPage from './component/ErrorPage.jsx'
import ReadBooks from './component/ReadBooks.jsx'
import WishList from './component/WishList.jsx'
import EBook from './pages/EBook.jsx'
import BookFair from './pages/BookFair.jsx'
// import Blogs from './component/Blogs.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        loader: ()=>fetch("/blogs.json"),
        element:<Home></Home>,
        
      },
      {
        path:'/details/:bookId',
        element:<BookDetails></BookDetails>,
        loader: ()=>fetch('../blogs.json'),  
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBooks></ReadBooks>,
            loader: ()=>fetch('../blogs.json'),
          },
          {
            path:'wishlist',
            element: <WishList></WishList>
          }
        ]
      },
      {
        path:'/reading',
        element:<PagesRead></PagesRead>
      },
      {
        path:'/ebook',
        element:<EBook></EBook>,
        loader: ()=>fetch('/books.json'),
      },
      {
        path:'/fair',
        element:<BookFair></BookFair>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

    
  </React.StrictMode>,
)
