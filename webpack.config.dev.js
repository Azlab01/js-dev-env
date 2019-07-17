// import the path package, as we are using babel, 'require' is changed to 'import from'
/*
SOURCE  : https://gist.github.com/coryhouse/d611e83e432f3ae65cc46ebb9b599930

import path from 'path';

// Webpack is configured by 'export'ing an object
module.exports = {
    devtool: 'inline-source-map',
     mode: 'development',

    // This is the entry point of the Webpack
    entry: [
        path.resolve(__dirname, 'src/index')
    ],

    // the target of the Webpack bundle for our current purpose is the web. It could also be 'node', or 'elektron' for desktop apps
    target: 'web',

    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    // define any plug-ins, if they are to be used - hot-reloading, linting, caching, styles, etc.
    plugins: [],

    // This informs Webpack about the file types that we wish to handle
    module: {
        // 'rules' informs Webpack how to handle different file types, it is the new 'loaders'
        rules: [{
            // include .js files
            // we are asking it to handle .JS files
            test: /\.jsx?$/,
            // preload the jshint loader
            enforce: "pre",
            // exclude any and all files in the node_modules folder
            exclude: /node_modules/,
            // USe the babel loader. With webpack 2.0.0, the -loader suffix is not allowed to be omitted
            loaders: ['babel-loader']
        },
        {
            // also, it is handling the .CSS files for us.
            test: /\.css$/,
            loader: ['style','css']
        }]
    },
}

ORIGINAL*/
import path from 'path';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}