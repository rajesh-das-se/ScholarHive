import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(url);
                setLoading(false);
                setData(res.data);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(err);
            }
        }
        fetchData();

    }, [url]);

    return [data, loading, error];
}

export default useFetch;