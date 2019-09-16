module.exports = {
  publicPath: '/webjobs/',
  configureWebpack:{
    module:{
      rules:[
        {
          test: /\.(pdf)(\?.*)?$/,
          use:[
            {
              loader: 'url-loader',
              options:{
                name: 'file/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
}