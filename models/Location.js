const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const locationSchema = Schema({
    code_Shoes: { type: Schema.Types.ObjectId, ref: 'Shoes' },
    date_start: Date,
    date_end: Date,
    code_customer: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });
const Location = mongoose.model('Location', locationSchema);

module.exports = Location;