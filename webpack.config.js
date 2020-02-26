const webpack = require("webpack"); 
const path = require("path"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //transfer style vis css not js
const HtmlWebpackPlugin = require('html-webpack-plugin') ; 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development', //development | production
    optimization: {
        minimize: false //for minify .js files
    },
    entry: {
        'index' : './src/index/index.js',
        'about' : './src/about/about.js',
        'agentRequest' : './src/agentRequest/agentRequest.js',
        'agents' : './src/agents/agents.js',
        'article' : './src/article/article.js',
        'articles' : './src/articles/articles.js',
        'basket' : './src/basket/basket.js',
        'changePassword' : './src/changePassword/changePassword.js',
        'faq' : './src/faq/faq.js',
        'forgetPassword' : './src/forgetPassword/forgetPassword.js',
        'login' : './src/login/login.js',
        'orders' : './src/orders/orders.js',
        'product' : './src/product/product.js',
        'products' : './src/products/products.js',
        'signup' : './src/signup/signup.js',
        'special' : './src/special/special.js',
        'support' : './src/support/support.js',
        'userInfo' : './src/userInfo/userInfo.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        //publicPath: './assets/imgs/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader" ,
				exclude: /node_modules/,
            },
            { //for transfer .css via css files
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // { //for transfer .css via js files
            //     test: /\.css$/,
            //     use: ['style-loader','css-loader','postcss-loader']
            // },
            {//for transfer .scss via css files
                test:/\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // { //for transfer .scss via js files
            //     test: /\.scss$/,
            //     use: ['style-loader','css-loader','postcss-loader','sass-loader']
            // },
            {
                test : /\.html$/,
                exclude: /node_modules/,		
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: false , //for minify html or not
                        publicPath: './'
                    }
                }]
            },
            {
                test : /\.(png|jpg|jpeg)$/ ,
                exclude: /node_modules/,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/imgs/',
                            publicPath : 'assets/imgs/' ,
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.(gif)$/ ,
                exclude: /node_modules/,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/imgs/gifs',
                            publicPath : 'assets/imgs/gifs',
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.(ttf|otf|woff|woff2|eot)$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/fonts/',
                            publicPath : 'assets/fonts/',
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.svg$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/svgs/',
                            publicPath : 'assets/svgs/',
                            esModule: false
                        }
                        }
                ]
            },
            {
                test : /\.mp4$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/vids/',
                            publicPath : 'assets/vids/',
                            esModule: false
                        }
                        }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ 
            filename: "[name].css", 
            chunkFilename: '[id].css',
            ignoreOrder: false 
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html' , 
            inject: true,
            chunks: ['index'],
            template: './src/index/index.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html' , 
            inject: true,
            chunks: ['about'],
            template: './src/about/about.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'agentRequest.html' , 
            inject: true,
            chunks: ['agentRequest'],
            template: './src/agentRequest/agentRequest.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'agents.html' , 
            inject: true,
            chunks: ['agents'],
            template: './src/agents/agents.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'article.html' , 
            inject: true,
            chunks: ['article'],
            template: './src/article/article.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'articles.html' , 
            inject: true,
            chunks: ['articles'],
            template: './src/articles/articles.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'basket.html' , 
            inject: true,
            chunks: ['basket'],
            template: './src/basket/basket.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'changePassword.html' , 
            inject: true,
            chunks: ['changePassword'],
            template: './src/changePassword/changePassword.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'faq.html' , 
            inject: true,
            chunks: ['faq'],
            template: './src/faq/faq.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'forgetPassword.html' , 
            inject: true,
            chunks: ['forgetPassword'],
            template: './src/forgetPassword/forgetPassword.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html' , 
            inject: true,
            chunks: ['login'],
            template: './src/login/login.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'orders.html' , 
            inject: true,
            chunks: ['orders'],
            template: './src/orders/orders.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'product.html' , 
            inject: true,
            chunks: ['product'],
            template: './src/product/product.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'products.html' , 
            inject: true,
            chunks: ['products'],
            template: './src/products/products.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'signup.html' , 
            inject: true,
            chunks: ['signup'],
            template: './src/signup/signup.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'special.html' , 
            inject: true,
            chunks: ['special'],
            template: './src/special/special.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'support.html' , 
            inject: true,
            chunks: ['support'],
            template: './src/support/support.html' 
        }),
        new HtmlWebpackPlugin({
            filename: 'userInfo.html' , 
            inject: true,
            chunks: ['userInfo'],
            template: './src/userInfo/userInfo.html' 
        }),
        new CleanWebpackPlugin()
    ]
};