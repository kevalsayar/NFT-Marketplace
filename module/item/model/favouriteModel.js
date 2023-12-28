/*
Project : TheNftAgency
FileName : favouriteModel.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to define favourite schema that will store and reterive item favourite information.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
const {DB_PREFIX} = require("../../../env")
const Schema = mongoose.Schema;

var favouriteSchema = mongoose.Schema({
    item_id: { type: Schema.Types.ObjectId, ref: 'item' },
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    created_date: {
        type: Date,
        default: Date.now
    },
});

favouriteSchema.plugin(uniqueValidator);
favouriteSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('favourites', favouriteSchema,DB_PREFIX+'favourites');