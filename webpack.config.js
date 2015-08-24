module.exports = {
    context: __dirname + '/app',
    entry: './app.js',
    devtool: 'source-map',
    output: {
        filename: 'app.js',
        path: __dirname + '/dist',
        sourceMapFilename: "[file].map"
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

            { loader: 'url-loader?limit=100000', test: /.(png|woff|woff2|eot|ttf|svg)$/ },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders

        ],
    },
    entry: {
        javascript: './app.js',
        html: './index.html'
    }
};

