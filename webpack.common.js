const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
    library: './src/library.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'img'
          }
        }
      }
    ]
  }
};
