/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const NODE_ENV = process.env.NODE_ENV
const { DefinePlugin } = require('webpack')

module.exports = {
  target:'node',
  mode: NODE_ENV ? NODE_ENV :'development',
  entry:path.resolve(__dirname, '../src/server/server.js'),
  output:{
    path:path.resolve(__dirname, '../dist/server'),
    filename:'server.js'
  },
  resolve:{
    extensions:['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals:[nodeExternals()],
  module:{
    rules:[
      {
        test: /\.(gif|svg|jpg|jpeg|png)$/,
        loader: 'file-loader',
      },
      {
        test:/\.[tj]sx?$/,
        use:['ts-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use:['css-loader', 'sass-loader'],
      },
    ]
  },
  optimization: {
    minimize: false
  },
  plugins: [ new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }) ]
}