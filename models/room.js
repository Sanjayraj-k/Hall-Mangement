const mongoose = require('mongoose');

const roomsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    labInCharge: {
        type: Number,
        required: true
    },
    imageurls: [],
    currentbookings: [],
    description: { // Fixed typo: "descrpition" -> "description"
        type: String,
        required: true
    }
}, { timestamps: true }); // Moved timestamps to schema options

const RoomModel = mongoose.model('rooms', roomsSchema);
module.exports = RoomModel;
