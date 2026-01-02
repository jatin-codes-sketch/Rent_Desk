export const AsyncHandler=(fn)=>{
    Promise
    .resolve(fn(req,res,next))
    .catch(err=>next(err))
}