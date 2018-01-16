const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const spinner = ora('building for production...');
spinner.start()
rm(path.join(path.resolve(__dirname, '../dist'), 'static'), err => {
  if (err) throw err

  var compiler = webpack(webpackConfig);
  compiler.watch({
    ignored: /node_modules/
  }, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
  });

});