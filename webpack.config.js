var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry:{
		main:'./src/script/main.js',
		a:'./src/script/a.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://cdn.com/'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:'index.html',
			filename:'index.html',
			inject:false,
			title:'webpack is good',
			date:new Date(),
			minify:{
				removeComments:true,
				collapseWhitespace:true
			}
		})
	]
}