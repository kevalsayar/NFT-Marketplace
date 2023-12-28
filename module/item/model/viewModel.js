/*
Project : TheNftAgency
FileName :  viewModel.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to define view schema that will store and reterive item view information.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
const {DB_PREFIX} = require("../../../env")
const Schema = mongoose.Schema;

var viewSchema = mongoose.Schema({
    item_id: { type: Schema.Types.ObjectId, ref: 'item' },
    user_id: { type: Schema.Types.ObjectId, ref: 'users' },
    created_date: {
        type: Date,
        default: Date.now
    },
});

viewSchema.plugin(uniqueValidator);
viewSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('views', viewSchema,DB_PREFIX+'views');