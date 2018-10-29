var express = require('express');
var request = require('request');
var md5 = require('md5');
var router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const path = require('path')
const privateKey = '@(hongdianbao#@!)@';

var app = express();


const remoteUrl = 'http://iapi.hongdianbao.com';
const platform = 'h5';
const version = 1000;


var FileStore = require('session-file-store')(session);
router.use(
    session({
        secret: '12345',
        name: 'hongdianbao', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
        cookie: {
            maxAge: 604800000
        }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
        resave: false,
        saveUninitialized: true,
        store: new FileStore(path),
    })
);

router.use(bodyParser.json());
router.all("*", function (req, res, next) {
    let path = req.path;
    let url = remoteUrl + path;
    let query = {};
    query = Object.assign(query, req.body, req.query);
    let params = sign(query, req);
    let formData = params;
    request.post({
        url,
        json: true,
        formData: formData
    }, function (error, response, body) {
         if (!error && response.statusCode === 200) {
             if (body.data && body.data.token) {
                  req.session.token = body.data.token;
             }
            res.send(body);
         } else {
            console.log('配置错误');
          }
    });
    // next();
});


function sign(query, req) {
    var time = Math.ceil(Date.now() / 1000);
    var random = Math.ceil(Math.random() * 1000000);
    // var token = util.getCookie("token")  || "";
    // console.log(req.cookies);
    // var token = req.cookies.get("token") || "";
    var token = req.session.token || "";
    // console.log("333",req.session);
    query['t'] = time;
    query['r'] = random;
    query['v'] = version;
    query['p'] = platform;
    query['token'] = token;
    // console.log("333", req.session);
    var keys = Object.keys(query);
    keys.sort();

    var str = '';
    for (var i in keys) {
        var key = keys[i];
        var value = query[key];
        str += key + privateKey + value;
    }
    var sign = md5(str);
    query['sign'] = sign;
    return query;
}


module.exports = router;