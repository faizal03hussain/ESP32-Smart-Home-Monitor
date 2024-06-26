const path = require('path');

module.exports = {
  entry: './electron-app/renderer.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development'
};
