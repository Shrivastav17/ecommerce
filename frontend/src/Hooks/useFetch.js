import { useState,useEffect } from "react";
import url from '../env'

function useFetch(path){
    var apipath = url.nodeapipath+path
    const [api,setapi] = useState([])

    useEffect(()=>{
        fetch(apipath)
        .then(res=>res.json())
        .then(json=>{
            console.log(json)
            setapi(json)
        })
    },[path])
    return api
}
export default useFetch