import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectTest = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const { data } = await axios.get('https://api.coincap.io/v2/assets')
        setData(data.data);
    }
    console.log(data);

    const Coin = () => {
        return <>
            < center >
                <ul>
                    {data.map(c => {
                        return <li key={c.id}>{c.name}</li>
                    })}
                </ul>
            </center >
        </>

    }

    return (
        <Coin />
    )

}

export default UseEffectTest