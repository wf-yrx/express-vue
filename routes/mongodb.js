let express = require('express');
let router = express.Router();

let ObjectId = require('mongodb').ObjectID;

let operatorDB = require('../modules/operatorDB');

router.get('/find',function(req,res,next){
    operatorDB.find('wfdb','wfCollection','',(err,content)=>{
       // operatorDB.find('xrr','xrrCollection','',(err,content)=>{
           if(!err){
            console.log("444"+JSON.stringify(content));
            res.json(content);
        }
    })
});

router.get('/findAccess',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.find('wfdb','wfCollection',{'age':req.query.age},(err,content)=>{
        // operatorDB.find('xrr','xrrCollection',{'age':parseInt(req.query.age)},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/findOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.findOne('wfdb','wfCollection',{'age':req.query.age},(err,content)=>{
        // operatorDB.findOne('xrr','xrrCollection',{'age':parseInt(req.query.age)},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/insertOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.insertOne('wfdb','wfCollection',{'name':req.query.name,'age':req.query.age},(err,content)=>{
        // operatorDB.insertOne('xrr','xrrCollection',{'name':req.query.name,'age':parseInt(req.query.age)},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/updateOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
   operatorDB.updateOne('wfdb','wfCollection',{'_id':ObjectId(req.query.id)},{$set:{'name':req.query.name,'age':req.query.age}},(err,content)=>{
    // operatorDB.updateOne('xrr','xrrCollection',{'_id':ObjectId(req.query.id)},{$set:{'name':req.query.name,'age':parseInt(req.query.age)}},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/deleteOne',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.deleteOne('wfdb','wfCollection',{'_id':ObjectId(req.query.id)},(err,content)=>{
        // operatorDB.deleteOne('xrr','xrrCollection',{'_id':ObjectId(req.query.id)},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});

router.get('/remove',function(req,res,next){
    // console.log('获取前端的请求参数',req.query);
    operatorDB.remove('wfdb','wfCollection',{},(err,content)=>{
        // operatorDB.remove('xrr','xrrCollection',{},(err,content)=>{
        if(!err){
            res.json(content);
        }
    })
});
module.exports = router;