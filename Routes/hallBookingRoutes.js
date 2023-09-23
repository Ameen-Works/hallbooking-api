const express = require("express");

const bookingACtions = require("../controllers/bookingAction");

const router = express.Router();

router.get("/all-rooms", bookingACtions.allRooms);
router.get("/room/:id", bookingACtions.roomById);
router.post("/create-room", bookingACtions.createRoom);
router.delete("/room/delete/:id", bookingACtions.deleteRoom);
router.post("/book-room/:id", bookingACtions.bookRoom);
router.get("/all-customers", bookingACtions.allCustomers);

module.exports = router;
