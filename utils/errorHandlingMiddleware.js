const  errorHandlingMiddleware = (err,req,res,next) =>{
    res.status(500).json({message:"Internal Server Error"})
}

export default errorHandlingMiddleware;