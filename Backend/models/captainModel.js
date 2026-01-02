const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            require: true,
            minlength: [3, 'First name must be at least 3 characters']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters']
        },
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: [3, 'Email name must be at least 3 characters']
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    socketId: {
        type: String
    },
    Status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            require: true,
            minlength: [3, 'Color must be at least 3 characters']
        },
        plate: {
            type: String,
            require: true,
            minlength: [3, 'Plate must be at least 3 characters']
        },
        capacity: {
            type: Number,
            require: true,
            minlength: [1, 'Capacity must be at least 3 characters']
        },
        vehicleType: {
            type: String,
            require: true,
            enum: ['enum', 'motorcycle', 'auto'],
        }
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
});

captainSchema.method.generateAuthToken = function () {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' });
    return token;
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;