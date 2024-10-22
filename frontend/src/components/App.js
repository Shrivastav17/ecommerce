import { useEffect } from "react";
import Footer from "./Footer.js";
import Header from "./Header.js";
import { Outlet } from "react-router-dom";
import { useCookies } from 'react-cookie';


import { ToastContainer} from 'react-toastify';
import { useDispatch } from "react-redux";
import { addValueInCart } from "../redux/reducers/cartSlice.js";

function App(){
    const [cookies, setCookie] = useCookies(['cartdata']);
    let dispatch = useDispatch();
    
    useEffect(()=>{
        var cookiedata = cookies.cartdata;
        if(cookiedata!==undefined){
            dispatch(addValueInCart(cookiedata))
        }

    },[])

    return (
        <>
        
            <ToastContainer />
            <Header/>
            <Outlet/>
            <Footer/>
        
        </>
    )
}

export default App;