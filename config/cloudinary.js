const cloudinary = require('cloudinary').v2
// import cloudinary from cloudinary.

cloudinary.config({
    CLOUD_NAME : process.env.CLOUD_NAME ,
    API_KEY : process.env.API_KEY ,
    API_SECRET : process.env.API_SECRETE

})

module.exports = cloudinary;