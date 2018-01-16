export default {
    //生产环境
    build:{
        env: 'product',
        DB_HOSTNAME: '',
        DB_USERNAME: 'tanyetao1',
        DB_PASSWORD: 'tanyetao1',
        DB_DATABASE: 'tanyetao1',
        DB_PORT: 'tanyetao1',
        ENV_PORT: 80
    },
    //开发环境
    dev:{
        env: 'env',
        DB_HOSTNAME: 'localhost',
        DB_USERNAME: 'tanyetao',
        DB_PASSWORD: 'tanyetao',
        DB_DATABASE: 'tanyetao',
        DB_PORT: '27017',
        ENV_PORT: 8080
    }
}