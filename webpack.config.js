module.exports = {
  entry: './index.js',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  },
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['strict-loader?generateSourceMapFromTokens']
      }
    ]
  }
};
