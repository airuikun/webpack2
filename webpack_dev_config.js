var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractCss = new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    });

module.exports = {
    devServer:{
        contentBase: 'src/html/',
        hot: true,
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: '/'
        }
    },
    devtool: 'eval',
    entry: {
        devServer:   'webpack/hot/only-dev-server',
        app: './src/index', //编译的入口文件
    },
    output: {
        publicPath: '/static/', //服务器根路径
        path: __dirname + 'static', //编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].chunk.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        extractCss, //单独打包css
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.join(__dirname, 'src/'),
            use: ['react-hot-loader', 'babel-loader']
        }, {
            test: /\.(scss)$/,
            exclude: /node_modules/,
            use: extractCss.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },'postcss-loader','sass-loader']
            })
        },{
            test: /\.(css)$/,
            use: extractCss.extract({
                fallback: 'style-loader',
                use: [{
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },'postcss-loader']
            })
        },{
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]"
                }
            }
        },{
            test: /\.(png|jpg)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 108192
                }
            },
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'], //后缀名自动补全
        alias: {
            // Component: path.resolve(__dirname, 'src/scripts/comp-common/index.js'),
            actions$: path.resolve(__dirname, 'src/actions/'),        
            common: path.resolve(__dirname, 'src/common/'),        
            component: path.resolve(__dirname, 'src/page/'),        
        }
    }
};