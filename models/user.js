const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: Schema.Types.ObjectId,
    user_name: String,
    displayName: String
});

module.exports = userSchema;