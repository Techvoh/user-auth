const productModel = require('../model/productModel');
const userModel = require('../model/userModel');
/*
create : upload product
get all : get all products
get single : get single product
update : update product
delete : delete product
*/

// create product
const uploadProduct = async (req, res) => {
    try {
        const getUser = await userModel.findById(req.params.userId)
        const { name, description, price, category, availability, quantity, image } = req.body;
       if (!getUser) {
            return res.status(404).json({ 
                message: 'User not found' });
       }
        const product = await productModel.create({ 
            name, description, price, category, availability, quantity, image 
        });
        getUser.products.push(product._id)
        await getUser.save();
        return res.status(201).json({ 
            message: 'Product uploaded successfully', 
            data: product 
        });
    
    } catch (error) {
        console.log("THE REAL ERROR IS:", error);
        return res.status(500).json({ message: error.message })
    }
 }


 // get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find()
        return res.status(200).json({
             message: 'All products fetched successfully',
            data: products
        })
    }catch (error) {
        return res.status(500).json({message: error.message})
 }
}




// get single product
const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await prodcutModel.findById(id);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
                
            })
        }
        return res.status(200).json({
            message: 'Product fetched successfully',
            data: product
        })
    } catch (error) {
        return res.status(500).json({ 
            message: error.message 
        });
    }
}

module.exports = {
    uploadProduct,
    getAllProducts,
    getSingleProduct
}