import { encript } from "../utils/bcript.js";
import prisma from "../utils/client.js";
import { logger } from "../utils/winston.js";
import { userValidation } from "../validations/user.validation.js"

export const createUser=async(req,res) =>{

    const {error, value} = userValidation(req.body);
    if(error){
        return res.status(400).json({
            message: error.details[0].message,
            result:null,
        });
    }

   try{
    const result = await prisma.user.create({
        data:{
            name:value.name,
            userName:value.userName,
            password:encript(value.password),
            role:value.role
        },
    })
    result.password ="xxxxxxxxxxxxxxxxxxx";
    return res.status(200).json({
        message:"success",
        result,
    });
   }catch(error){
    logger.error(
        "controllers/user.controller.js:createUser - " + error.message
    );
    return res.status(500).json({
        message: error.message,
        result:null,
    });
   }
};