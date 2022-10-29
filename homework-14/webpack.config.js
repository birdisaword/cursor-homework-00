const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: ["./src/scripts/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
   
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
     },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    
    ],
  },
};