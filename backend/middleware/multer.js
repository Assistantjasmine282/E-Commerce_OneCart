import multer from 'multer'

let storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, Path2D.resolve('./public'))
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
});
 let upload = multer({storage})

 export default upload
