/*
Project : TheNftAgency
FileName :  priceModel.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to define view schema that will store and reterive item price information.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
const {DB_PREFIX} = require("../../../env")
const Schema = mongoose.Schema;

var priceSchema = mongoose.Schema({
    item_id: { type: Schema.Types.ObjectId, ref: 'item' },
    price: {
        type: Number,
        default:0
    },
    user_id: {
        type: Schema.Types.ObjectId, ref: 'users'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

priceSchema.plugin(uniqueValidator);
priceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('prices', priceSchema,DB_PREFIX+'prices');