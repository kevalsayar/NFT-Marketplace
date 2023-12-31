/*
Project : TheNftAgency
FileName : collectionModel.js
Author : GlobalVox

CopyRights : GlobalVox
Purpose : This is the file which used to define collection schema that will communicate and process collection information with mongodb through mongoose ODM.
*/

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate-v2');
var uniqueValidator = require('mongoose-unique-validator');
const {DB_PREFIX} = require("../../../env")
const Schema = mongoose.Schema;
// Setup schema
var collectionSchema = mongoose.Schema({
    name: {
        type: String,
        minlength: [3, 'Name must be 3 characters or more'],
        maxlength: [255, "Name can't exceed 255 characters"],
        unique: [ true , 'Name already exists. Please try a different name'],
        required: [ true , 'Name is required'], 
    },   
    description: {
        type: String,
        maxlength: [1000, "Description can't exceed 1000 characters"]
    },   
    contract_symbol:{
        type:String,
    },
    contract_address: {
        type: String
    },
    banner: {
        type: String,
    }, 
    image: {
        type: String,
    },
    royalties:{
        type: Number,
        default:0
    },
    volume_traded:{
        type: Number,
        default:0
    },
    item_count:{
        type: Number,
        default:0
    },
    status:{
        type: Number,
        enum : [0,1],
        default: 1
    },
    author_id: { type: Schema.Types.ObjectId, ref: 'users' },
    create_date: {
        type: Date,
        default: Date.now
    },
});

collectionSchema.plugin(uniqueValidator);
collectionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('collection', collectionSchema,DB_PREFIX+'collection');