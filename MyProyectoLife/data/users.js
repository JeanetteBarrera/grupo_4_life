const fs = require('fs');
const path = require('path');
const users_db = path.join('data','db_users.json');

module.exports = {
    getUsers : () =>{
        return JSON.parse(fs.readFileSync(users_db, 'utf-8'));
    },
    setProducts : (data) => {
        fs.writeFileSync(users_db,JSON.stringify(data,null,2),'utf-8');
    }
}
