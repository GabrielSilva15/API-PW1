import multer, {Options} from "multer";
import path from "path";
import { v4 } from "uuid";


import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



export const multerConfig = {
    storage: multer.diskStorage({
        destination:(req,file,callback)=>{
            console.log("aqyu");
            
            console.log(path.join("/uploads"));
            
            callback(null,path.join(__dirname+"../"+"../"+"../"+"../","uploads"));
            
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


