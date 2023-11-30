const { StatusCodes } = require('http-status-codes');
const info =(req,res)=>{
    return res.status(StatusCodes.Ok).json({
        message:"Done",
        success:"Ok"
    });
} ;
module.exports = { info } 
