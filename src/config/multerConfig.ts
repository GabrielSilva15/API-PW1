import multer, {Options} from "multer";
import path from "path";
import { v4 } from "uuid";

const dirname = path.resolve("uploads");


export const multerConfig = {
    storage: multer.diskStorage({
        destination:(req,file,callback)=>{        
            callback(null,path.join("uploads"));
            
        },
        filename:(req,file,callback)=>{
            callback(null,`${v4()}_${file.originalname}`);
        }
    }),
    limits:{
        fileSize:8 * 1024 * 1024
    },
    fileFilter:(req,file,callback)=>{
        const mimeType = ["image/png", "image/jpeg","image/gif", "image/jpg"];
        if(!mimeType.includes(file.mimetype)){
            return callback(null,false);
        }
        callback(null,true);
    }
} as Options;


