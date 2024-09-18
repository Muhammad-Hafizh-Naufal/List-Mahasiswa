import express from "express";
import {
  getAllMhs,
  createMhs,
  findOneMhs,
  updateMhs,
  deleteMhs,
} from "./MhsController.js";

const router = express.Router();

router.get("/mahasiswa", getAllMhs);
router.get("/mahasiswa/:npm", findOneMhs);
router.post("/mahasiswa", createMhs);
router.patch("/mahasiswa/:npm", updateMhs);
router.delete("/mahasiswa/:npm", deleteMhs);

export default router;
