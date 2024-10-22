import React, { useRef, useState } from 'react'
import useFetch from '../Hooks/useFetch'
import dataProcess from '../Functions/dataProcess';
export default function AddProduct() {

    var ans = useFetch('/category-brand')
    console.log(ans)

    var x1 = useRef()
    var x2 = useRef()
    var x3 = useRef()
    var x4 = useRef()
    var x5 = useRef()
    var x7 = useRef()

    var [status, setStatus] = useState(false)

    // product image path hai
    var [fileData, setFileData] = useState({})

    function myfunc(e) {
        e.preventDefault()
        if (status) {
            var formRecord = new FormData()
            console.log(formRecord);
            formRecord.append('productname', x1.current.value)
            formRecord.append('productprice', x2.current.value)
            formRecord.append('productdiscount', x3.current.value)
            formRecord.append('categoryid', x4.current.value)
            formRecord.append('brandid', x5.current.value)
            formRecord.append('productdescription', x7.current.value)
            formRecord.append('productpath', fileData)
            console.log(fileData);

            dataProcess('/admin/add-product', {
                method: 'post',
                // headers:{'Content-Type':'multipart/form-data'},
                body: formRecord
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            alert('Please select file to upload')
        }
    }
    function fileStatus(record) {
        console.log(record);
        console.log(record.files[0]);
        setFileData(record.files[0]);
        setStatus(true)
    }

    return (
        <section id="form">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form">
                            <h2>Add Products</h2>
                            <form action="#" onSubmit={myfunc}>
                                <input type="text" ref={x1} placeholder="Name" />
                                <input type="text" ref={x2} placeholder="Price" />
                                <input type="text" ref={x3} placeholder="Discount" />
                                <select ref={x4}>
                                    <option>Select Categories</option>
                                    {
                                        ans.category && ans.category.map(val =>
                                            <option value={val._id}>{val.categoryname}</option>
                                        )
                                    }
                                </select>
                                <select ref={x5}>
                                    <option>Select Brands</option>
                                    {
                                        ans.brand && ans.brand.map(val =>
                                            <option value={val._id}>{val.brandname}</option>
                                        )
                                    }
                                </select>
                                <input onChange={(e) => {
                                    fileStatus(e.target)
                                }} type='file'></input>
                                <textarea ref={x7} placeholder='description'></textarea>

                                <button type="submit" class="btn btn-default">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
