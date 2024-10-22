/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import url from '../env'
import useFetch from '../Hooks/useFetch.js'
import { brandDataTransfer } from '../redux/reducers/brandSlice.js'
import { useDispatch } from 'react-redux'

export default function Brands() {

    const dispatch = useDispatch()
    var brands = useFetch('/brands/show-brand')
    console.log(brands)
    

    var myfunc = (ev,id)=>{
        ev.preventDefault();
        // console.log(id);
        dispatch(brandDataTransfer(id));
    }
    return (
        <div class="brands_products">
            <h2>Brands</h2>
            <div class="brands-name">
                <ul class="nav nav-pills nav-stacked">
                    
                    {
                        brands.data && brands.data.length && brands.data.map(val =>
                            <li><a href="#"  onClick={(ev)=>{ myfunc(ev,val._id) }}> <span class="pull-right">(50)</span>{val.brandname}</a></li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
