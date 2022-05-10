const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log("process.env.NODE_ENV", process.env.NODE_ENV);
module.exports = {
	//模式 development/production  //在package.json的script中可以配置
	// mode: "development",
	//打包入口文件
	entry: { main: "./src/index.tsx" },
	// 打包的出口文件和路径
	output: {
		path: path.join(__dirname, "./dist"),
		filename: "mian.[contenthash:8].js",
		clean: true,
	},
	devServer: {
		//开发服务器的配置
		port: 1024, //端口
		open: true, //打包完成自动打开浏览器
		compress: true, //启用压缩
	},
	module: {
		rules: [
			// 处理jsx
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					babelrc: false,
					presets: [
						require.resolve("@babel/preset-react"),
						[
							"@babel/preset-typescript",
							{
								isTSX: true,
								allExtensions: true,
							},
						],
					],
				},
			},
			// 处理css和less
			{
				test: /\.css|less$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "less-loader"],
			},
			// 处理字体、图片等文件
			{
				test: /\.ttf|woff|woff2|svg|png|jpg|git$/,
				use: "url-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html", // 使用的模板html，没有指定的话会自动生成index.html。所以可以不需要public文件夹下的index.html
			// filename: "index.html", // 打包生成的html文件名，默认为index
			title: "WebpackPro",
		}),
	],
	resolve: {
		//省略后缀名
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".json", ".svg"],
		// 配置路径别名
		alias: {
			"@assets": path.resolve("./src/assets"),
			"@views": path.resolve("./src/views"),
			"@utils": path.resolve("./src/utils"),
			"@components": path.resolve("./src/components"),
		},
	},
};
