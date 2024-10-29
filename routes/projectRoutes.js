const express = require("express");
const multer = require("multer");
const { createProject } = require("../controllers/projectController");
const { isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", isAdmin, upload.single("image"), createProject);

module.exports = router;
