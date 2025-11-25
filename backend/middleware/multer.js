// import multer from 'multer'

// let storage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null, Path2D.resolve('./public'))
//     },
//     filename: (req,file,cb)=>{
//         cb(null, Date.now() + '-' + file.originalname)
//     }
// });
//  let upload = multer({storage})

//  export default upload


import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("./public"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage });

export default upload;
