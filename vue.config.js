module.exports = {
    publicPath: '/hart-house-orchestra/',
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.xml$/i,
                    use: 'raw-loader',
                },
                {
                    test: /\.csv$/i,
                    use: 'raw-loader',
                },
            ],
        },
    }
  }