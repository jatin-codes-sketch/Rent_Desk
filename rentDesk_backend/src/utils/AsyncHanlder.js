export const AsyncHandler=(fn)=>{
    return Promise
    .resolve(fn(req,res,next))
    .catch(err=>next(err))
}