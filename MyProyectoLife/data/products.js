const fs = require('fs');


module.exports =JSON.parse(fs.readFileSync(__dirname + '/db-products.json','utf-8'));