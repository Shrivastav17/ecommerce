import React,{useRef,useState,useEffect} from "react"

function Form(props) {

    var x1 = useRef()
    var x2 = useRef()

    var [email,setEmail] = useState('viral@gmail.com')
    var [pass,setPass] = useState("1234")

    // useEffect(()=>{
    //     console.log('Use Effect Called',email,pass);
    // })

    // useEffect(()=>{
    //     console.log('Use Effect Called',email,pass);
    // },[])

    // useEffect(()=>{
    //     console.log('Use Effect Called',email,pass);
    // },[email])

    // useEffect(()=>{
    //     console.log('Use Effect Called',email,pass);
    // },[email,pass])

    // useEffect(()=>{
    //     console.log('Use Effect Called',email,pass);
    //     return ()=>{
    //         console.log('Use Effect Tested');
    //     }
    // })

    //console.log(props)
    function myfunc(event){
        console.log('test')
        event.preventDefault()
        //props.username='Jay'
        //console.log(x1,x2);
        var data1 = x1.current.value;
        var data2 = x2.current.value;
        console.log(data1,data2);

        setEmail(data1)
        setPass(data2)
    }
    return (
        <div className="container">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" ref={x1} aria-describedby="emailHelp"></input>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" ref={x2} id="exampleInputPassword1"></input>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={myfunc} type="submit" class="btn btn-primary">Submit</button><br></br>
                {/* {props.username},
                {props.userage} */}

                {email}
                {pass}
            </form>
        </div>
    )
}


export default Form;