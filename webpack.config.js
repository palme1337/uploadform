module.exports = {
    context: __dirname + '/app',
    entry: './app.js',

    output: {
        filename: 'app.js',
        path: __dirname + '/dist'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader']
            },
            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]'
            },

        ],
    },
    entry: {
        javascript: './app.js',
        html: './index.html'
    }
};

