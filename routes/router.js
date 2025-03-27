const express = require("express");
const router = express.Router();

const {
    createNew,
    getAll,
    getById,
    update,
    deleteById
} = require("../controllers/controllers");

router.post("/", createNew);
router.get("/", getAll);
router.get("/:id", getById);
router.put("/:id", update);
router.delete("/:id", deleteById);

module.exports = router;