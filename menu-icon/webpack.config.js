const path = require('path');

module.exports = {
  entry: './index.js', // Replace with the path to your web component's main JavaScript file
  output: {
    filename: 'bundle.js', // The name of the bundled file
    path: path.resolve(__dirname, 'dist'), // The directory where the bundled file will be placed
  },
};