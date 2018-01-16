import * as express from "express";
import * as bodyParser from "body-parser";
import * as logger from "morgan";
import { DBCtrl } from "./db";
import * as envconfig from "../config";

//判断环境变量（dev为开发，product为生产）
let env:string = process.argv[2];
let envJson: any = {};
(env === 'dev') ?  envJson = envconfig.default.dev : envJson = envconfig.default.build;

// 连接数据库
DBCtrl.connection();

//实例化express
const app = express();

//设置服务端口
app.set("port", envJson.ENV_PORT || 3000);

// 格式化请求
app.use(bodyParser.json());// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));// parse application/x-www-form-urlencoded

//请求日志打印
app.use(logger('dev'));

app.use((req, res, next) => {
  console.log(req.body)
  next();
});

//导入路由
require('./routes')(app);

//创建一个服务
app.listen(app.get("port"), () => {
  console.log(`服务器地址:http://${envJson.DB_HOSTNAME}:${app.get("port")},${app.get("env")}`);
});
