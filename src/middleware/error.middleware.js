const ErrorMiddleware = async (error, req, res, next) => {
    console.error(error.stack);
    res.status(error.status || 500).json({
        message: error.message || "INTERNAL SERVER ERROR",
    });
}
export default ErrorMiddleware;
