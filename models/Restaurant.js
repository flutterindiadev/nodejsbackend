const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    title: { type: String, required: true },
    time: { type: String, required: true },
    imageUrl: { type: String, required: true },
    foods: { type: Array },
    pickup: { type: Boolean, required: false, default: true },
    delivery: { type: Boolean, required: false, default: true },
    owner: { type: String, required: true },
    isAvailable : {type : Boolean, default : true},
    code: { type: String, required: true },
    phone: { type: String, required: false },
    logoUrl: {
        type: String,
        required: true,
        default: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    rating: { type: Number, min: 1, max: 5 },
    ratingCount: { type: String },
    coordinates: {
        id: { type: String, required: true },
        lattitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
        lattiudeDelta: { type: Number, required: true },
        longitudeDelta: { type: Number, required: true },
        address: { type: String, required: true },
        title: { type: String, required: true }
    }
}, { timestamps: true })

module.exports = mongoose.model('Restaurant', restaurantSchema)