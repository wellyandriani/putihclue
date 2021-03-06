const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TenantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: ['Inactive'],
        required: true
    },
    member: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    images: {
        type: String
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }

})
module.exports = mongoose.model('Tenant', TenantSchema)