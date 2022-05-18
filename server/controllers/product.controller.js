const { Product } = require("./../models/product.model")

module.exports.testAPI = (req, res) => {
    // res.status(400).json("Wrong Message")
    res.json("backend message")
}

//get all
module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json(err))
}

// create
module.exports.createProduct = (req, res) => {
    Product.create(req.body) // inside () --> info to create the Song
        .then(newProduct => res.json(newProduct))
        .catch(err => res.status(400).json(err))
}

//get one
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err))
}

//update
module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.status(400).json(err))
}

//delete
module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(err => res.status(400).json(err))
}