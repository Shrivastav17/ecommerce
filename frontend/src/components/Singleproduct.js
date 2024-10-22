import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import path  from '../env';
import { useCookies } from 'react-cookie';

import {  toast } from 'react-toastify';
import { addValueOnButtonClick } from '../redux/reducers/cartSlice';
import { useDispatch } from 'react-redux';



export default function Singleproduct() {

    let dispatch = useDispatch();
    let navigate = useNavigate();

    const[pro,setPro] = useState({});

    const [cookies, setCookie] = useCookies(['cartdata']);

    var urlData = useParams();
    console.log(urlData);

    var proid = urlData.productid;
    console.log(path.nodeapipath);

    //products/show-product/proid
    useEffect(()=>{
        fetch(path.nodeapipath+'/products/show-product/'+proid)
        .then(res=>res.json())
        .then(value=>{
            console.log(value);
            setPro(value.data)
        })
    } , [proid]);

    var addToCart = (productObj)=>{
        console.log(productObj);

        console.log(cookies.cartdata);

        var cartCount=0;
        if(cookies.cartdata === undefined){
            console.log('Add First Record In Cart');
            var arrProduct = [];
            arrProduct.push(productObj);
            console.log(arrProduct);
            var arrDataInString = JSON.stringify(arrProduct);
            console.log(arrDataInString);

            const currentDate = new Date();
            const nextDate = new Date();

            nextDate.setDate(currentDate.getDate() + 1);
            console.log(nextDate);

            setCookie('cartdata', arrDataInString, { expires : nextDate });
            console.log('First Record Added in Cart');

            dispatch(addValueOnButtonClick(productObj))

            toast("Product Added in Cart!");
            //pass count=1 via redux into header component

        }
        else{
            console.log('Add 2nd Record Onward Cart');
            console.log(cookies.cartdata);

            var cookiedata = cookies.cartdata;
            var resultProduct = cookiedata.filter(obj=> obj._id == productObj._id)
            console.log(resultProduct);

            if(resultProduct.length > 0) {
                toast("Product Exist in Cart!");
                cartCount=cookiedata.length;
            }
            else{
                cookiedata.push(productObj);
                console.log(cookiedata);
                var arrDataInString = JSON.stringify(cookiedata);
                console.log(arrDataInString);

                const currentDate = new Date();
                const nextDate = new Date();

                nextDate.setDate(currentDate.getDate() + 1);
                console.log(nextDate);

                setCookie('cartdata', arrDataInString, { expires : nextDate });
                cartCount=cookiedata.length 
                dispatch(addValueOnButtonClick(productObj))

                toast("Product Updated in Cart!");
            }
        }
       
        navigate('/cart');
    }
  return (
    <div className='container'>
        {
            pro && Object.keys(pro).length>0 && (
                <>
                <div className='col-md-6'>
                    <img src={path.nodeapipath+'/Assets/Uploads/'+pro.productpath} className='img-responsive' />
                </div>
                <div className='col-md-6'>
                    <h2><del> {pro.productprice} </del> 
                    {(pro.productprice)-(pro.productprice*pro.productdiscount/100)} 
                    </h2>
                    <h4>{pro.productname}</h4>
                    <p>
                        {pro.productdescription}
                    </p>
                    <p>
                        Category :
                    </p>
                    <p>
                        Brand :
                    </p>
                    <p>
                        <button onClick={()=>{ addToCart(pro) }}>Add To Cart</button>
                    </p>
                </div>
                </>
            )
        }
        
    </div>
  )
}
