const express = require('express');
const router = express.Router();
const Room = require('../models/room');
router.get('/getallrooms', async (req, res) => {
    try {
        const rooms = await Room.find({});
        return res.send(rooms);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

router.get('/getroombyid/:roomid', async (req, res) => {
    const { roomid } = req.params;
    try {
        const room = await Room.findById(roomid);
        if (!room) {
            return res.status(404).json({ message: "Room not found" });
        }
        return res.json(room);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

module.exports = router;
