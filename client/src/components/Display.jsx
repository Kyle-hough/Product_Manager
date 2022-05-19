import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Display = (props) => {

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/products/${deleteId}`)
            .then(response => props.reloadList())
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>All Products:</h1>
            <table>
                <tbody>
                    {
                        props.products.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                                    <td><Link to={`/products/${product._id}/edit`}>Edit</Link></td>
                                    <td> <button onClick={()=> handleDelete(product._id)}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display