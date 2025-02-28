import { useState, useEffect } from "react";

const useFetch= (url)=>{
    const [data, setData]=useState([]);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            setLoading(true);
            return res.json();
        })
        .then((jsonData)=>{
            setLoading(false);
            setData(jsonData);
        })
        .catch((err)=>{
            console.log(err);
            setLoading(false);
            setError(err);
        })
        
    }, [url]);

    return [data, loading, error];
}

export default useFetch;