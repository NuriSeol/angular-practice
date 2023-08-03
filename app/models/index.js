const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
// mongoose.Promise = global.Promise는 Mongoose가 내장 프로미스를 사용하도록 설정하는 코드로, 프로미스를 사용하여 비동기적인 작업을 처리할 수 있도록 합니다.
mongoose.Promise = global.Promise;

// 객체의 속성으로 설정
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

// 모듈 내보내기:
module.exports = db;
