const express = require("express");

const router = express.Router();

const {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} = require("../controllers/studentcontroller");

router.post("/", createStudent);
router.get("/", getStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;