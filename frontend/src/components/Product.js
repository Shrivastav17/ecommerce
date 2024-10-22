/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import url from '../env'
import useFetch from '../Hooks/useFetch.js'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

export default function Products() {

    const catidValue = useSelector((state) => state.category.value);
    const brandidValue = useSelector((state) => state.brand.value);
    
    console.log(brandidValue);

    // var path = (catidValue=="")?'/admin/show-newproduct':`/admin/show-product-by-category/${catidValue}`;

    var path1 = (brandidValue=="")?'/admin/show-newproduct':`/admin/show-product-by-brand/${brandidValue}`;

    // console.log(path);
    var products = useFetch(path1)
    console.log(products)


    return (
        <div class="brands_products">
            <h2>Products</h2>
            <div class="brands-name">
                {/* <ul class="nav nav-pills nav-stacked">

                    {
                        products.data && products.data.length && products.data.map(val =>
                            <li><a href="#"> <span class="pull-right">(50)</span>{(val.productpath, val.productname, val.productprice)}</a></li>
                        )
                    }
                </ul> */}
                
                    
                        {
                            products.data && products.data.length && products.data.map(val =>
                                <div className='col-md-4 text-center'>
                                    <img src={url.nodeapipath+"/Assets/Uploads/"+val.productpath} alt="Product Image"></img>
                                    <p>{val.productprice}</p>
                                    <p>
                                        <Link to={"/single-product/"+val._id}>
                                            {val.productname}
                                        </Link>
                                    </p>
                                    <p>{val.categoryid}</p>
                                    <p>{val.brandid}</p>
                                    <p>
                                        <button className='btn btn-dark'>Add To Cart</button>
                                    </p>
                                </div>
                            )
                        }
                    
               
            </div>
        </div>
    )
}
