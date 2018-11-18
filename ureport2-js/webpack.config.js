/**
 * Created by Jacky.Gao on 2018-04-15.
 * Base on Webpack4
 */
const path=require('path');
module.exports={
    mode:'development',
    devtool: '#source-map',
    entry: {
        designer:'./src/index.js',
        searchform:'./src/form/index.js',
        preview:'./src/preview.js'
    },
    output:{
        path:path.resolve('./public/ureport-asserts/js'),
        filename:'[name].bundle.js'
    },
    devServer: {
		historyApiFallback: true,
		port:8000,
      	hot: true,
		inline: true,
		contentBase: path.resolve(__dirname, 'public'),
		index: '.public/designer.html',
		stats: { colors: true },
		proxy: {
	        '/ureport/': {
	          target: 'http://localhost:8080',
	          pathRewrite: {'^/ureport/' : '/ureport/'},
	          changeOrigin: true
	        },
	        '/ureport/searchFormDesigner':{
	          target: 'http://localhost:8080',
	          pathRewrite: {'^/ureport/searchFormDesigner' : '/ureport/searchFormDesigner'},
	          changeOrigin: true
	        }
	     }
	},
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000000
                        }
                    }
                ]
            }
        ]
    }
};