let connectDb = require('./db');

//查询所有数据
function find(dbname,collectionName,json,callback){
    connectDb((db)=>{
        let DB = db.db(dbname);
        let collection = DB.collection(collectionName);
        let result  = collection.find(json).toArray(callback);
    })
}
module.exports = {
    find,
};