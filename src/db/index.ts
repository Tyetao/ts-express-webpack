
import * as mongoose from "mongoose";
import * as bluebird from "bluebird";
import * as envconfig from "../../config";

let env:string = process.argv[2];
let envJson: any = {};
(env === 'dev') ?  envJson = envconfig.default.dev : envJson = envconfig.default.build;
/**
 * 数据库类
 * DB_HOSTNAME 数据库IP地址
 * DB_USERNAME 数据库用户名
 * DB_PASSWORD 数据库密码
 * DB_DATABASE 数据库名
 * DB_PORT     数据库端口号
 * @return 实例
 */
class DB {
  private DB_HOSTNAME;
  private DB_USERNAME;
  private DB_PASSWORD;
  private DB_DATABASE;
  private DB_PORT;

  constructor(DB_HOSTNAME: string, DB_USERNAME: string, DB_PASSWORD: string, DB_DATABASE: string, DB_PORT: number = 27017) {
    this.DB_HOSTNAME = DB_HOSTNAME;
    this.DB_USERNAME = DB_USERNAME;
    this.DB_PASSWORD = DB_PASSWORD;
    this.DB_DATABASE = DB_DATABASE;
    this.DB_PORT = DB_PORT;
  }

  public connection() {
    //mongoose.connect('mongodb://username:password@host:port/database?options...');
    const DB_URL = `mongodb://${this.DB_USERNAME}:${this.DB_PASSWORD}@${this.DB_HOSTNAME}:${this.DB_PORT}/${this.DB_DATABASE}`;
    (<any>mongoose).Promise = bluebird;
    mongoose.connect(DB_URL, { useMongoClient: true }).then(
      succ => {
        console.log(`数据库连接成功${DB_URL}`);
      },
    ).catch(
      err => {
        console.log(`数据库连接错误${err}`);
        process.exit();
      });
  }
}
export const DBCtrl = new DB(envJson.DB_HOSTNAME,envJson.DB_USERNAME,envJson.DB_PASSWORD,envJson.DB_DATABASE,envJson.DB_PORT);