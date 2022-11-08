import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddItems from '../Component/Pages/AddItems/AddItems';
import Blog from '../Component/Pages/Blog/Blog';
import Home from '../Component/Pages/Home/Home';
import Items from '../Component/Pages/Items/Items';
import ItemsDetails from '../Component/Pages/ItemsDetails/ItemsDetails';
import MyReviews from '../Component/Pages/MyReviews/MyReviews';
import Login from '../Component/Shared/Login/Login';
import Logout from '../Component/Shared/Logout/Logout';
import Signup from '../Component/Shared/Signup/Signup';
import Root from '../Root/Root';

const router=createBrowserRouter([
    {
        path:'/',
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
                loader:({params})=>fetch(`http://localhost:5000/itemDetails/${params.id}`),
                element:<ItemsDetails></ItemsDetails>
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
                element:<MyReviews></MyReviews>
            },
            {
                path:'/addItems',
                element:<AddItems></AddItems>
            }
        ]
    }
])

export default router;