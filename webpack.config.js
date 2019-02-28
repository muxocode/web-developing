const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      { 
        test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
        use: [
          {
            loader: 'file-loader',
            options: {outputPath: 'assets/'}
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  entry: "./src/index.tsx"
};