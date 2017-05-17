var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var extractCss = new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
    });
module.exports = {
    entry: {
        app: './src/index', //编译的入口文件
        common: ['react', 'react-router', 'redux']
    },
    output: {
        path: path.join(__dirname, 'build'), //编译到当前目录
        filename: '[name].[chunkhash:8].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:8].js'
    },
    plugins: [
        extractCss, //单独打包css
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
            'process.env.browser': JSON.stringify(true)
        }),
        new CopyWebpackPlugin([
            {from: './src/html/index.html', to: __dirname + '/build/index.html'}
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({//提取公共js 模块
            name: ['common'],
            minChunks: Infinity //提取所有entry依赖模块
        }),
        // new ManifestPlugin(),
        new ChunkManifestPlugin({
            filename: "manifest.json",
            manifestVariable: "webpackManifest"
        }),
        //升级后默认加载 new webpack.optimize.DedupePlugin(),//删除重复数据
        new HtmlWebpackPlugin({ //根据模版生成结果html,自动添加打包生成js,css等静态资源，自动增加hash
            excludeChunks: ['manifest.json'],
            filnames: ['./src/html/index.html'],
            template: './src/html/index.html.js',
            hash: true,
            inject: true
        }),
        //升级后默认加载 new webpack.optimize.OccurenceOrderPlugin() 
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
        extensions: ['*', '.js', '.jsx']
    }
};