import React, { useEffect, useState } from 'react';

export default function Test() {
    const [api, setApi] = useState([]);

    useEffect(() => {
        fetchFunction()
    }, [])

    useEffect(() => {
        if (api != '') {
            delayfunc()
        }
    }, [api])

    async function fetchFunction() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const json = await response.json();
            setApi(json);
            console.log("start");
        }
        catch (err) {
            throw ((err) => {
                console.log(err, "___err");
            })
        }
    }

    const delayfunc = () => {
        console.log("___delayfunc",)
    }

    return (
        <div >
        </div>
    )
}
