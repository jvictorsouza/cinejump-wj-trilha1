const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["@babel/polyfill", path.resolve(__dirname, "src", "main.js")],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    library: "$",
    libraryTarget: "umd",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /.*\.(svg|gif|png|jpe?g)$/i,
        use: {
          loader: "file-loader",
        },
      },
    ],
  },
  plugins: [new Dotenv()],
};
