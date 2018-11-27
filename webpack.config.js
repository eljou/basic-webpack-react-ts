const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-module-source-map',

	entry: __dirname + '/src/index.tsx',

	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},

	resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}
