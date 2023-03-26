const router = require("express").Router();
const students = require("../controllers/students/presentation");

// create student
router.post("/", students.create);

// delete student
router.delete("/:studentId", students.delete);

//get one student
router.get("/:studentId", students.getOne);

// get all student
router.get("/", students.getAll);

// update student
router.patch("/", students.update);
module.exports = router;
