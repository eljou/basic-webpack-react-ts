const path = require('path'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-module-source-map',

	entry: path.resolve(__dirname, 'src/index.tsx'),

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ 
				test: /\.scss$/, use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: { minimize: true }
						},
						"sass-loader"
					]
				})
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
		new ExtractTextPlugin('style.css')
	]
}
