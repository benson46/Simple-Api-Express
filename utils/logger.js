export const logger = (req, res, next) => {
  console.log(`Call is for ${req.method}  in url ${req.url}`);
  next();
};