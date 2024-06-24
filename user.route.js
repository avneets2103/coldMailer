import { Router } from "express";
import { MLSendMail, DevSendMail, querySendMail} from "./user.controller.js";

const router = Router();

router.route("/MLSendMail").post(MLSendMail);
router.route("/DevSendMail").post(DevSendMail); 
router.route("/QuerySendMail").post(querySendMail);

export default router;