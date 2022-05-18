import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const { id } = useParams()
    const navigate = useNavigate() 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(response => {
            const product = response.data
            setTitle(product.title)
            setPrice(product.price)
            setDescription(product.description)
        })
        .catch(err => console.error(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
        .then(response => navigate(`/products`))
            .catch(err => console.log(err))
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then(response => navigate(`/products`))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Title</label>
                    <input type="text" name="title" value={title}
                        onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    <label> Price</label>
                    <input type="number" name="price" value={price}
                        onChange={e => setPrice(e.target.value)} />
                </div>
                <div>
                    <label> Description</label>
                    <input type="text" name="description" value={description}
                        onChange={e => setDescription(e.target.value)} />
                </div>
                <button type="submit">Update product</button>
            </form>

            <button onClick={handleDelete}>Delete</button>
            
        </div>
    )
}

export default Update