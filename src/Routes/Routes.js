import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Logins/Login";
import Register from "../Pages/Login/Register/Register";
import News from "../Pages/News/News";
import Profile from "../Pages/Profile/Profile";
import TreamsContaditon from "../Pages/Treams-Contaditon/TreamsContaditon";
import PrivateRouter from "./PrivateRouter";


export const routes=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/news/')
            },
            {
            path: '/news/:id',
            element: <PrivateRouter> <News></News> </PrivateRouter>,
            loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
            path: '/category/:id',
            element:<Category></Category>,
            loader:({params})=>fetch (`http://localhost:5000/category/${params.id}`)
            },
            {
            path: '/login',
            element:<Login></Login>,
           
            },
            {
            path: '/register',
            element:<Register></Register>
            
            },
            {
            path: '/terms',
            element:<TreamsContaditon></TreamsContaditon>
            
            },
            {
            path: '/profile',
            element:<PrivateRouter>  <Profile></Profile> </PrivateRouter>
            
            }

        ]
    }
])