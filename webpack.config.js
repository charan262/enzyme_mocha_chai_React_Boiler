var config = {
    entry: './index.js',

    output: {
        path:'/',
        filename: 'bundle.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

            }
        ]
    }
}

module.exports = config;