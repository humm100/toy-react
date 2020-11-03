# toy-react

## 第一课：JSX的原理和关键实现 （2020-11-13）

1. 初始化工程配置：npm init
2. 安装webpack、webpack-cli
3. webpack配置：webpack.config.js --> main.js
   
4. 安装 babel-loader
    
    1. babel-loader
    2. @babel/core
    3. @babel/preset-env
    
5. module 配置：rules : babel-loader
6. 安装jsx babel插件：@babel/plugin-transform-react-jsx
7. 配置jsx webpack.config.js
8. 实现jsx语法糖功能 createElement方法
9. jsx可用自定义组件（非原生组件）
    1. 分文件
    2. 包装createElement方法
    3. 包装createTextNode方法
    4. 现实Component类
    5. render方法

10. 扩展组件children功能，加强jsx处理能力
