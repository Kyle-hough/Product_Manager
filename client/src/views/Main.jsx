import React, { useEffect, useState } from 'react'
import axios from "axios"
import Create from '../components/Create'
import Display from '../components/Display'




const Main = () => {
    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                setProducts(response.data)
            })
            .catch()
    }, [])

    // grabbing all product for DisplayTable
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [refresh])

    // handleDelete1 & create function
    const reload = () => {
        setRefresh(!refresh)
    }

    return (
        <div>
            <Create reloadList={reload}/>
            <Display products={products} reloadList={reload}/>
            <button onClick={reload}> reload </button>
        </div>
    )
}

export default Main