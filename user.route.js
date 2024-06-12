import { Router } from "express";
import { MLSendMail, DevSendMail} from "./user.controller.js";

const router = Router();

router.route("/MLSendMail").post(MLSendMail);
router.route("/DevSendMail").post(DevSendMail); 

export default router;