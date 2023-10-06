const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "src/index.html", // to import index.html file inside index.js
  //   }),
  // ],
  entry: './src/index.js', // Replace with the path to your web component's main JavaScript file
  output: {
    filename: 'bundle.js', // The name of the bundled file
    path: path.resolve(__dirname, 'dist'), // The directory where the bundled file will be placed
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
};