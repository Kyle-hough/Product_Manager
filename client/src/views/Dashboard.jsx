import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

const Dashboard = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then(response =>{
            setProducts(response.data)
            console.log(response.data)
        })
        .catch (err => console.log(err))
    },[])

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
        .then(response => {
            const filteredList = products.filter((product, i) => product._id !== deleteId)
            setProducts(filteredList)
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>All Products:</h1>
            <table>
                <tbody>
                    {
                        products.map((product,i) => (
                        <tr key={i}>
                            <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                            <td><Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                            <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard