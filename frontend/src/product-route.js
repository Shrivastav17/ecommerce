import {
    createBrowserRouter
  } from "react-router-dom";
import App from "./components/App";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/404";
import ProductDetails from "./components/Product-details";
import Products from "./components/AllProducts";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Form from "./components/Form";
import AddCategory from "./components/AddCategory";
import AddBrand from "./components/AddBrand";
import AddProduct from "./components/AddProduct";
import Singleproduct from "./components/Singleproduct";

const customRoute = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/login-page',
                element:<Login></Login>
            },
            {
                path:'',
                element:<Home></Home>
            },
            {
                path:'*',
                element:<Error></Error>
            },
            {
                path:'/product-details',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/all-products',
                element:<Products></Products>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            },
            {
                path:'contact-us',
                element:<Contact></Contact>
            },
            {
                path:'/add-category',
                element:<AddCategory></AddCategory>
            },
            {
                path:'/add-brand',
                element:<AddBrand></AddBrand>
            },
            {
                path:'/add-product',
                element:<AddProduct></AddProduct>
            },
            {
                path:'form',
                element:<Form username='Viral' userage="21"></Form>
            },
            {
                path:'single-product/:productid',
                element:<Singleproduct />
            }
        ]
    }
])

export default customRoute