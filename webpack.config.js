const webpack = require('webpack'); // 访问内置的插件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 自定义的loader和plugin.注意引入方式不同
const Myloader = path.resolve(__dirname, './webpackUtils/myloader.ts');
const MyConsolePlugin = require('./webpackUtils/myplugin.ts');

module.exports = {
  //模式 development/production  //在package.json的script中可以配置
  // mode: "development",
  //打包入口文件
  entry: {main: './src/index.tsx'},
  // 打包的出口文件和路径
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'mian.[contenthash:8].js',
    clean: true,
  },
  // webpack5提供的内置持久化缓存.不再使用cache-loader
  cache: {
    type: 'filesystem', // 启用持久化缓存
    cacheDirectory: path.resolve('.temp_cache'), // 缓存文件存放的位置
    buildDependencies: {
      // 缓存失效的配置
      config: [__filename],
    },
  },
  devServer: {
    //开发服务器的配置
    port: 1024, //端口
    open: true, //打包完成自动打开浏览器
    compress: true, //启用压缩
    hot: true, // 启动模块热更新
    client: {
      overlay: {
        // 只显示错误信息
        errors: true,
        warnings: false,
      },
      logging: 'warn', // 控制台只显示warn以上信息
    },
    allowedHosts: 'all',
  },
  module: {
    rules: [
      // 处理jsx,tsx
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                require.resolve('@babel/preset-react'),
                [
                  '@babel/preset-typescript', // 处理ts,tsx
                  {
                    isTSX: true,
                    allExtensions: true,
                  },
                ],
              ],
            },
          },
          {
            loader: 'thread-loader',
            options: {workers: 3},
          },
          Myloader,
        ],
      },
      // 处理css和less
      {
        test: /\.css|less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          {loader: Myloader, options: {name: 'echo'}},
        ],
      },
      // 处理字体、图片等文件
      {
        test: /\.ttf|woff|woff2|svg|png|jpg|git$/,
        // type: 'asset/', // webpack5 新增 Asset Modules 资源模块,不再需要url-loader。
        // parser: {
        //   dataurlCondition: {
        //     maxSize: 8192,
        //   },
        // },
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 使用的模板html，没有指定的话会自动生成index.html。所以可以不需要public文件夹下的index.html
      // filename: "index.html", // 打包生成的html文件名，默认为index
      title: 'WebpackPro',
    }),
    // new BundleAnalyzerPlugin(), // 使用默认配置(仅限开发模式使用)
    new MyConsolePlugin(),
  ],
  resolve: {
    //省略后缀名
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
    // 配置路径别名
    alias: {
      '@assets': path.resolve('./src/assets'),
      '@views': path.resolve('./src/views'),
      '@utils': path.resolve('./src/utils'),
      '@components': path.resolve('./src/components'),
    },
  },
};
