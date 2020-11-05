module.exports = {
    entry: {
        //第一课：
        main1: './src1/main.js',
        //第二课：
        main2: './src2/main.js',
        ticTacToe2: './src2/ticTacToeMain.js',
        //第三课
        main3: './src3/main.js',
        ticTacToe3: './src3/ticTacToeMain.js',
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