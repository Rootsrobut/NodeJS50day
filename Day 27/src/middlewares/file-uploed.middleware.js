import multer from 'multer';
const strogerconfig=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            const name=Date.now()+"-"+file.originalname;
            cb(null, name);
        }
});
 export const  uploadFile=multer({storage:strogerconfig});