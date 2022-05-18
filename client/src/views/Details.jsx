import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div>
            {
                product&&
                <div>
                    <h1>{product.title}</h1>
                    <h3>Price: ${product.price}</h3>
                    <h3>Description: {product.description}</h3>
                </div>
            }
        </div>
    )
}

export default Details