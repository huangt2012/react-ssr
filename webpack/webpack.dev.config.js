const path = require("path");

//定一个通用的路径转换方法
const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
  mode: "development",
  entry: resolvePath("../src/client/app/index.js"), // 入口文件
  output: {
    filename: "index.js",
    path: resolvePath("../dist/static"), // 设置构建结果的输出目录
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {  test: /\.(sa|sc|c)ss$/,
      use: [
          {
              loader: "css-loader",
          },
          {
              loader: "postcss-loader"
          },
          {
              loader: "sass-loader"
          }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: 'img/[name].[ext]'//配置图片的输出路径和名称
          }
        }]
      }
    ],
  },
};
