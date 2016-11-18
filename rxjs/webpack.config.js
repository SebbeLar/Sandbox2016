module.exports = {
    entry: ['babel-polyfill', './app'],
    output: { filename: 'bundle.js' },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            }
        ]    
    },
    resolve: ['', 'js']
}
