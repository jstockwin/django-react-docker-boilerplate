var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.dev.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  inline: true,
  historyApiFallback: true,
}).listen(3000, "localhost", function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
