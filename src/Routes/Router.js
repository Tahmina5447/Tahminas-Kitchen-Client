import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddItems from '../Component/Pages/AddItems/AddItems';
import Blog from '../Component/Pages/Blog/Blog';
import Home from '../Component/Pages/Home/Home';
import Items from '../Component/Pages/Items/Items';
import ItemsDetails from '../Component/Pages/ItemsDetails/ItemsDetails';
import MyReviews from '../Component/Pages/MyReviews/MyReviews';
import Login from '../Component/Shared/Login/Login';
import Signup from '../Component/Shared/Signup/Signup';
import ErrorPage from '../ErrorPage/ErrorPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Root from '../Root/Root';

const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Root></Root>,
        children:[
            
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/items',
                element:<Items></Items>
            },
            {
                path:'/details/:id',
                loader:({params})=>fetch(`https://tahminas-kitchen.vercel.app/itemDetails/${params.id}`),
                element:<PrivateRoute><ItemsDetails></ItemsDetails></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/myReviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path:'/addItems',
                element:<PrivateRoute><AddItems></AddItems></PrivateRoute>
            }
        ]
    }
])

export default router;