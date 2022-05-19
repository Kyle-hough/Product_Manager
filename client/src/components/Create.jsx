import React, { useState } from 'react'
import axios from 'axios'


const Create = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [errors, setErrors] = useState([])


    const handleSubmit = (e) => {
        e.preventDefault()
        clearForm()
        axios.post(`http://localhost:8000/api/products`, { title, price, description })
            .then(response => {
                console.log(response)
                props.reloadList()
                clearForm()
            })
            .catch(err => {
                const errArr = []
                const errResData = err.response.data.errors
                console.log(errResData)
                for (const key in errResData) {
                    errArr.push(errResData[key]["message"])
                }
                setErrors(errArr)
            })
    }
    const clearForm = () => {
        setTitle("")
        setPrice("")
        setDescription("")
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
                <button type="submit">Create a new product</button>
            </form>
            {
                errors.map((err, i) => (
                    <p key={i} style={{ color: "red" }}> {err} </p>
                ))
            }
        </div>
    )
}

export default Create