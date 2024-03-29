var db = require('../db');
var ObjectID=require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection('exponats').find().toArray(function (err,docs) {
        cb(err,docs);
    })
};

exports.findById=function (id,cb) {
    db.get().collection('exponats').findOne({_id:ObjectID(id)},function (err,doc) {
        cb(err,doc);
    })
};

exports.create = function (exponat,cb) {
    db.get().collection('exponats').insertOne(exponat,function (err,result) {
        cb(err,result);
    })
};

exports.update = function (id,newData,cb) {
    db.get().collection('exponats').updateOne(
        {_id: ObjectID(id)},
        newData,
        function (err,result) {
            cb(err,result);
        }
    )
};

exports.delete = function (id,cb) {
    db.get().collection('exponats').deleteOne(
        {_id: ObjectID(id)},
        function (err, result) {
            cb(err,result);
        }
    )
};