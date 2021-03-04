const path = require("path");
const fs = require("fs");

const {getProducts, setProducts} = require(path.join('..','data','products'));
const categories = JSON.parse(fs.readFileSync(path.join('data','db_categorias.json'),'utf-8'));

const products = getProducts();

module.exports = {

    /*entidad productos*/

    productList: (req, res) => {
        res.render("admin/productList",{
            products
        });
    },

    productCreate: (req, res) => {
        res.render("admin/productCreate", {
            categories
        });
    },

    productStore: (req, res, next) => {
       
       /* let newID = products.length +1;*/
       let lastID = 1;
        products.forEach(product => {
            if(product.id > lastID) {
                return lastID = product.id;
            }
        })      
        const newProduct = {
           /* id : Number(newID),*/
            id : Number(lastID +1),
            name : req.body.name.trim(),
            category : req.body.category,
            subcategory : req.body.subcategory,
            colors: ["background-color:#5B6857","background-color:#000000"],
            variante1 : [
                {
                    color : "background-color:#5B6857",
                    img : (req.files[0])?req.files[0].filename:"default-product-image.png",
                    sizes :[
                        {"size":"s", "stock": 10},
                        {"size":"m", "stock": 10},
                        {"size":"l", "stock": 10},
                        {"size":"xl", "stock": 10}
                    ]
                }
            ],
            description: req.body.description.trim(),
            price: +req.body.price,
            discount: +req.body.discount
        }
        products.push(newProduct);

        setProducts(products);
        res.redirect('/admin/product/list');
        console.log(req.body);
    },

    productEdit: (req, res) => {

        const product = products.find(product => product.id === +req.params.id);

        res.render("admin/productEdit", {
            product,
            categories
        });
    },

    productUpdate : (req, res) => {
        
        products.forEach(product => {
            if(product.id === +req.params.id) {
                product.id = Number(req.params.id);
                product.name = req.body.name;
                product.category = req.body.category;
                product.subcategory = req.body.subcategory,
                product.colors= ["background-color:#5B6857","background-color:#000000"],
                product.variante1 = [
                {
                    color : "background-color:#5B6857",
                    img : req.body.img,
                    sizes :[
                        {"size":"s", "stock": 10},
                        {"size":"m", "stock": 10},
                        {"size":"l", "stock": 10},
                        {"size":"xl", "stock": 10}
                    ]
                }
                ],
                product.description= req.body.description,
                product.price = req.body.price,
                product.discount = req.body.discount
            }
        });
        setProducts(products);
        res.redirect("/admin/product/list")
    },

    productDelete : (req, res) => {
        products.forEach(product => {
            if(product.id === Number(req.params.id)) {
                
                if(fs.existsSync(path.join('public','images','img', product.variante1[0].img))){
                    fs.unlinkSync(path.join('public','images','img', product.variante1[0].img))
                }
                let aEliminar = products.indexOf(product);
                products.splice(aEliminar,1)
            }
        });
        setProducts(products);
        res.redirect("/admin/product/list");
       /* console.log(aEliminar)*/
    
    }

}