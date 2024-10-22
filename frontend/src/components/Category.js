/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import url from '../env'
import useFetch from '../Hooks/useFetch.js'
import {  useDispatch } from 'react-redux'
import { categoryDataTransfer } from '../redux/reducers/categorySlice.js';

export default function Category() {

    const dispatch = useDispatch();
    

    var categories = useFetch('/categories/show-category')
    console.log(categories)
    
    var myfunc = (ev,catid)=>{
        ev.preventDefault();
        console.log(catid);
        dispatch(categoryDataTransfer(catid))
    }

    return (
        <div class="brands_products">
            <h2>Categories</h2>
            <div class="brands-name"> 
                <ul class="nav nav-pills nav-stacked">
                    
                    {
                        categories.data && categories.data.length && categories.data.map(val =>
                            <li onClick={(ev)=>{ myfunc(ev,val._id) }}><a href="#"> <span class="pull-right">(50)</span>{val.categoryname} </a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
