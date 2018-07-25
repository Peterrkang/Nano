const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new S3Plugin({
      // Only upload css and js
      include: /.*\.(css|js|html)/,
      // s3Options are required
      s3Options: {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      },
      s3UploadOptions: {
        Bucket: 'nano-vendors'
      }
    })
  ],
});
