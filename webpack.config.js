module.exports = {
    entry: {
        //第一课：
        main1: './src1/main.js',
        //当前课
        main: './src/main.js',
        ticTacToe: './src/ticTacToeMain.js',
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx',{
                            pragma:'createElement'
                        }]]
                    }
                }
            }
        ]
    },
    mode: "development",
    watch: true,
    optimization: {
        minimize: false
    }
}