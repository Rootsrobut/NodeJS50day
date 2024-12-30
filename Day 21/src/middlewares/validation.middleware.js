import {body,validationResult} from 'express-validator';
const validateRequest=async (req,res,next)=>{
   //1. setup rules for validaion
   const rules=[
    body('name').isString().isEmpty().withMessage('name must be a string'),
    body('price').isFloat({gt:0}).withMessage('Price must be a positive number'),
    body('imageUrl').isURL().withMessage("InvalidUrl")
   ];
   //2. run those rules 
   await Promise.all(rules.map(rule=>rule.run(req)));
   var validateerror=validationResult(req)
   //3. check if there are any errors afte;r running the rules
   if(!validateerror.isEmpty()){
     return res.render('new-product',{errorMessage:validateerror.array()[0].msg});
   }
    next();
};
export default validateRequest;