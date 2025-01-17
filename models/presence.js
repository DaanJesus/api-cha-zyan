const mongoose = require('mongoose');

const PresenceSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    agregados: [{ nome: { type: String } }],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Presence', PresenceSchema);