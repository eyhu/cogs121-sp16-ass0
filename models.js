'use strict';

var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
	"email": String,
	"content": String,
	"created": Date
});

// Export Schema
exports.Message = mongoose.model('Message', MessageSchema);