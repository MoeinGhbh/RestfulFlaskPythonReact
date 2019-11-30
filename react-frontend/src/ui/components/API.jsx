import React, {useEffect} from 'react';

function API() {
useEffect(()=>{
        fetch("/api/v1.0/test").then(response =>
        response.json().then(data=> {
            return (
                data
                // console.log(data)
            );
        })
        )    } ,[])
}

export default API();