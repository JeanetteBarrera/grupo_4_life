const path = require("path");
const fs = require("fs");
const db = require('../database/models');
const { validationResult } = require("express-validator");

module.exports = {


    productCreate: (req, res) => {

        let subMujer = db.Subcategory.findAll({where:{categoryId:1 }});
        let subHombre = db.Subcategory.findAll({where:{categoryId:2}});
        let categorias = db.Category.findAll()
    
        Promise.all([subMujer, subHombre, categorias])
            .then(([subMujer,subHombre, categorias]) => {
                res.render('admin/productCreate', {
                    subHombre,
                    categorias,
                    subMujer
                    })
                })
                .catch(errores => {
                    console.log(errores)
                })
    },
    productStore: (req, res, next) => {

        const errores= validationResult(req);

        if(!errores.isEmpty()){
            let subMujer = db.Subcategory.findAll({where:{categoryId:1 }});
            let subHombre = db.Subcategory.findAll({where:{categoryId:2}});
            let categorias = db.Category.findAll()
        
            Promise.all([subMujer, subHombre, categorias])
                .then(([subMujer,subHombre, categorias]) => {
                    res.render('admin/productCreate',{
                    subMujer,
                    subHombre,
                    categorias,
                    errores: errores.mapped(),
                    old: req.body
                });
            });

        }else{

            const {subcategory,name,description,price, discount}= req.body;
       
            db.Product.create({
                subcategoryId: subcategory,
                name: name,
                description: description,
                price: price,
                discount: discount,
                status:1

            }).then((resultado)=>{
                //console.log(req.body.color)
                for( let i=0; i < req.body.color.length; i++){
                // console.log(req.files[i].filename)
                    db.Variant.create({
                        productId:resultado.id,
                        color: req.body.color[i],
                        image: (req.files[i].filename)?req.files[i].filename:"default-product-image.png"
                    })
                    .then((variante)=> {
                        console.log("aca entro "+i)
                        //console.log(variante)
                        let talle = ["stockS","stockM","stockL","stockXL"];
                        let stock= [];

                        for(let j=0; j<talle.length; j++){
                            let stockObject = {
                                productId: resultado.id,
                                variantId: variante.id,
                                sizeId: j+1,
                                stock: req.body[`${talle[j]}`][i]
                            }
                            
                            /*console.log(stockObject)
                            console.log( req.body[`${talle[j]}`][i])*/
                            stock.push(stockObject);
                        }
                        //console.log(stock);
                        db.Stock.bulkCreate(stock, {
                            returning: true
                        })
                        .then((dato)=>{
                            console.log(dato)
                        })
                        .catch((err)=>{
                            console.log(err);
                        })
                    })
                    .catch((error)=>{
                        console.log(error);
                    })
                }
                res.redirect("admin/product/list")
            })
            .catch((error)=>{
                console.log(error)
            })
        }
        
    },
    
    productEdit: (req, res) => {
        console.log(req.params.id)
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock", include:[{association:"Size"}]}]}]
        })
        .then(product =>{
            //res.json(product)
            res.render('admin/productEdit', {
                producto: product
            })
            .catch(errores => {
                console.log(errores)
            })
        })
    },
    /*productUpdate: (req, res) => {
        //console.log(req.body)
        //let idProducto = req.params.id;
         const {subcategory,name,description,price, discount}= req.body;

        db.Product.update({

            subcategoryId: subcategory,
            name: name,
            description: description,
            price: price,
            discount: discount
            },
            {
                where:{ id:req.params.id } 
        })
        .then((producto)=>{
            //console.log(`${JSON.stringify(producto, null, 2)}`)
            //res.json(producto)
           db.Variant.findAll({
                where:{
                    productId: producto.id
                },
                include: [{association:"stock"}]
            })
            .then((variantes) => {
                console.log(variantes)
                for(let i=0; i<variantes.length; i++){

                    db.Variant.update({
                        productId: producto.id,
                        color: req.body.color[i],
                        image:(req.files[i].filename)?req.files[i].filename:req.body.image[i]

                    },
                    {
                        where:{ id:variantes[i].id}
                    }
                    ).then((stock)=> {
                        console.log(stock);
                        let talle = ["stockS","stockM","stockL","stockXL"];
                        for(let j=0; j<talle.length; j++){
                            db.Stock.update({
                                productId: producto.id,
                                variantId: stock.id,
                                sizeId: j+1,
                                stock: req.body[`${talle[j]}`][i]
                            },
                            {
                                where:{id:variantes[i].stock[j].id}
                            }).then((result)=> {
                                res.redirect("/")
                            }).catch(errores=> {
                                console.log(errores)
                            })

                        }

                    }).catch(errores => {
                        console.log(errores)
                    })

                };

               
            })
            .catch(errores =>{
                console.log(errores)
            })

        })
        .catch(errores => {
            console.log(errores)
        })
        
    },*/
    

    /* actualizacion de una variante sola, funcionando
    productUpdate: (req, res)=> {
        const {subcategory,name,description,price, discount}= req.body;
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock", include:[{association:"Size"}]}]}]
        }).then((producto)=>{
            console.log(producto)
            console.log(req.body)
                db.Variant.update({
                    productId: producto.id,
                    //color: req.body[`color[]`][0],
                    color: req.body.color[0],
                    image:(req.files[0].filename)?req.files[0].filename:req.body.image
                    },
                    {
                        where:{ id:producto.variantes[0].id}
                    
                }).then((dato)=> {
                    console.log(dato)
                }).catch(errores=> {
                    console.log(errores)
                })
            
        }).catch(errores => {
            console.log(errores)
        })
    }*/
    /* actualizacion de varias variantes en simultaneo
    productUpdate: (req, res)=> {
        const {subcategory,name,description,price, discount}= req.body;
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock", include:[{association:"Size"}]}]}]
        }).then((producto)=>{
            console.log(producto)
            console.log(req.body)

                for(let i=0; i<producto.variantes.length; i++){
                    console.log( "ingreso numero: "+ i)
                    db.Variant.update({
                        productId: producto.id,
                        //color: req.body[`color[]`][0],
                        color: req.body.color[i],
                        image:(req.files[i])?req.files[i].filename:producto.variantes[i].image
                        },
                        {
                            where:{ id:producto.variantes[i].id}
                        
                    }).then((dato)=> {
                        console.log(dato)
                    }).catch(errores=> {
                        console.log(errores)
                    })
                }
        }).catch(errores => {
            console.log(errores)
        })
    }*/
    /* actualizacion de variantes con stock  en simultane
    productUpdate: (req, res)=> {
        const {subcategory,name,description,price, discount}= req.body;
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock", include:[{association:"Size"}]}]}]
        }).then((producto)=>{
            console.log(producto)
            console.log(req.body)

                for(let i=0; i<producto.variantes.length; i++){
                    console.log( "ingreso numero: "+ i)
                    db.Variant.update({
                        productId: producto.id,
                        //color: req.body[`color[]`][0],
                        color: req.body.color[i],
                        image:(req.files[i])?req.files[i].filename:producto.variantes[i].image
                        },
                        {
                            where:{ id:producto.variantes[i].id}
                        
                    }).then((dato)=> {
                        console.log(dato)
                        let talle = ["stockS","stockM","stockL","stockXL"];

                        for(let j=0; j<talle.length; j++){
                            console.log("ingreso de j: ")
                            db.Stock.update({
                                productId: producto.id,
                                variantId: producto.variantes[i].id,
                                sizeId: j+1,
                                stock: req.body[`${talle[j]}`][i]


                            },
                            {
                                where:{ id: producto.variantes[i].stock[j].id}
                            }
                            ).then((dato)=>{
                                console.log(dato);
                            }).catch(errores=>{
                                console.log(errores)
                            })
                        }
                    }).catch(errores=> {
                        console.log(errores)
                    })
                }
        }).catch(errores => {
            console.log(errores)
        })
    }*/
    productUpdate: (req, res)=> {
        const {subcategory,name,description,price, discount}= req.body;
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock", include:[{association:"Size"}]}]}]
        }).then((producto)=>{
            //console.log(producto)
            //console.log(req.body)
            db.Product.update({
                subcategoryId:subcategory,
                name: name,
                description:description,
                price: price,
                discount:discount,
                status:1
            },
            {
                where:{ id: req.params.id}
            }
            ).then((dato)=>{
                for(let i=0; i<producto.variantes.length; i++){
                    //console.log( "ingreso numero: "+ i)
                    db.Variant.update({
                        productId: producto.id,
                        color: req.body.color[i],
                        image:(req.files[i])?req.files[i].filename:producto.variantes[i].image
                        },
                        {
                            where:{ id:producto.variantes[i].id}
                        
                    }).then((dato)=> {
                        //console.log(dato)
                        let talle = ["stockS","stockM","stockL","stockXL"];

                        for(let j=0; j<talle.length; j++){
                            //console.log("ingreso de j: ")
                            db.Stock.update({
                                productId: producto.id,
                                variantId: producto.variantes[i].id,
                                sizeId: j+1,
                                stock: req.body[`${talle[j]}`][i]


                            },
                            {
                                where:{ id: producto.variantes[i].stock[j].id}
                            }
                            ).then((dato)=>{
                                console.log(dato);
                            }).catch(errores=>{
                                console.log(errores)
                            })
                        }
                    }).catch(errores=> {
                        console.log(errores)
                    })
                }
            }).catch(errores=>{
                console.log(errores)
            })
            res.redirect("admin/product/list")
        }).catch(errores => {
            console.log(errores)
        })
    },
    productDelete: (req,res)=>{
        db.Product.update({
            status:0
        },
        {
            where:{id: req.params.id}
        }).then((dato)=> {
            console.log(dato)
            res.redirect('/admin/product/list')
        }).catch(errores=>{
            console.log(errores)
        } )
    },
    productList: (req, res)=>{
        db.Product.findAll({
            include: [
                {association:"Subcategory",include:[{association:"Category"}]},
                {association:"variantes", include:[{association:"stock", include:[{association:"Size"}]}]}]
        
        }).then(result=>{
            res.render("admin/ProductList",{
                producto:result
            })
        })
    }
}





































/*const {getProducts, setProducts} = require(path.join('..','data','products'));
const categories = JSON.parse(fs.readFileSync(path.join('data','db_categorias.json'),'utf-8'));

const products = getProducts();



module.exports = {

    //entidad productos

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
       
       // let newID = products.length +1;
       let lastID = 1;
        products.forEach(product => {
            if(product.id > lastID) {
                return lastID = product.id;
            }
        })      
        const newProduct = {
           // id : Number(newID),
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
       // console.log(aEliminar)
    
    }

}*/