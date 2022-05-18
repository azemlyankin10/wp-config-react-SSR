/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const webpackClientConfig = require('./cfg/webpack.client.config')
const webpackServerConfig = require('./cfg/webpack.server.config')

module.exports =[
  webpackClientConfig,
  webpackServerConfig
]
