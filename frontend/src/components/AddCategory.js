import React, { useState } from 'react'
import dataProcess from '../Functions/dataProcess';

export default function AddCategory() {

    function myfunc(e) {
        e.preventDefault()
        console.log(category);

        if(category != ''){
            dataProcess('/categories/add-category',{
                method:'post',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({categoryname:category})
            })
            .then((res)=>{
                console.log(res);
                setmsg(res.msg)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        else{
            setmsg('Category name required')
        }
    }
    var [category,setCategory] = useState("")
    var [msg,setmsg] = useState("")
    return (
        <section id="form">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-1">
                        <div class="login-form">
                            <h2>Add Categories</h2>
                            <form action="#" onSubmit={myfunc}>
                                <input type="text" onChange={(e) => { setCategory(e.target.value) }} placeholder="Name" />
                                <button type="submit" class="btn btn-default">Add</button>
                                <p>{msg}</p>
                            </form>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <h2 class="or">OR</h2>
                    </div>
                    <div class="col-sm-4">
                        <div class="signup-form">
                            <h2>New User Signup!</h2>
                            <form action="#">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email Address" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" class="btn btn-default">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
