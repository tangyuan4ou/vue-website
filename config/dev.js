module.exports = {
    publicPath: '/',
    devServer: {
        port: 4000,
        proxy: {
            // '/api/auth/': {
            //     target: 'http://api.example.dev',
            //     changeOrigin: true,
            //     pathRewrite: { '^/api': '' }
            // }
        }
    }
}