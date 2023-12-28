/*
Project : TheNftAgency
FileName :  historyModel.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to define view schema that will store and reterive item view information.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
const {DB_PREFIX} = require("../../../env")
const Schema = mongoose.Schema;

var historySchema = mongoose.Schema({
    item_id: { type: Schema.Types.ObjectId, ref: 'item' },
    collection_id: { type: Schema.Types.ObjectId, ref: 'collection' },
    from_id: { type: Schema.Types.ObjectId, ref: 'users' },
    to_id: { type: Schema.Types.ObjectId, ref: 'users' },
    transaction_hash: {
        type:String
    },
    price: {
        type:Number
    },
    history_type:{
        type: String,
        enum : ['minted','bids','transfer', 'commission', 'admin_commission']
    },
    is_valid: {
        type:Boolean,
        default:true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

historySchema.plugin(uniqueValidator);
historySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('history', historySchema,DB_PREFIX+'history');