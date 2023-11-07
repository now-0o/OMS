const path = require('path');
const request = require('request');
require('dotenv').config();

const index = (req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html')); 

    const options = {
        uri: "https://api.imweb.me/v2/shop/products/0",
        headers: {
            'access-token': process.env.access_token
        }
      };
      request(options,function(err,response,body){
        res.json(JSON.parse(body));
      })
}

module.exports = { index }