const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    permissions: [String], // Array of permissions
});

module.exports = mongoose.model('Role', roleSchema);
