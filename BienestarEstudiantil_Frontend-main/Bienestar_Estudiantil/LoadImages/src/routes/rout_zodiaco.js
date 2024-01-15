// Import all modules required
import {Router} from "express";
import {methods} from "../controllers/crl_zodiaco";


// Create multer object for upload image into memory
const multer = require('multer');
const useMemory = multer({storage:multer.memoryStorage()});


// Create router object
const router = Router();


// Create routes for zodiaco and export router object
router.get("/",methods.getZodiaco);
router.post("/",useMemory.single('zodiacImage'),methods.addZodiaco);


// Export router object
export default router;
