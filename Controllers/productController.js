const productModel = require("../Models/productModel")
const { cloudinary } = require("../Config/cloudineryConfig")


const createProduct = async (req, res)=>{
    const {ProductName, ProductDescription, ProductPrice, ProductImage, ProductCategory} = req.body
    

    if (!ProductName || !ProductDescription || !ProductPrice || !ProductImage || !ProductCategory) {
        res.status(400).send({message : "All fields are required"})
        
    }else{
        try {
            const imageUpload = await cloudinary.uploader.upload(ProductImage, {folder : "productImages"})
            const productLink = imageUpload.secure_url
            console.log(productLink)
            
            
            
            const createProduct = await productModel.create({
            ProductName,
            ProductDescription,
            ProductPrice,
            ProductImage: productLink,
            ProductCategory

            }) 

            if(!createProduct){
                res.status(400).send({message: "Unable to create product", status: "false"})
            }else{
                res.status(200).send({message: "Product successfully posted", status: "success"})

            }


        } catch (error) {
            res.status(400).send({message : "All fields are required"})
        }
    }
}

module.exports = {createProduct}

