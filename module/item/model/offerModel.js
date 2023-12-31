/*
Project : TheNftAgency
FileName :  offerModel.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to define offer schema that will store and reterive item offer information.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
const {DB_PREFIX} = require("../../../env")
const Schema = mongoose.Schema;

var offerSchema = mongoose.Schema({
    item_id: { type: Schema.Types.ObjectId, ref: 'item' },
    sender: { type: Schema.Types.ObjectId, ref: 'users' },
    receiver: { type: Schema.Types.ObjectId, ref: 'users' },
    price: {
        type:Number
    },
    status:{
        type: String,
        enum : ['pending','accepted']
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

offerSchema.plugin(uniqueValidator);
offerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('offer', offerSchema,DB_PREFIX+'offer');