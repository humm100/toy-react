# toy-react

## 第一课：JSX的原理和关键实现 （2020-11-3）

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

----------
## 第二课：为toy-react添加生命周期 （2020-11-4）

1. 添加state对象 先在MyComponent里简单添加state属性并在render显示出来
2. 组件更新是在render环节里的，取render.root()的过程，实际上就是一个正实渲染的过程，root就是跟渲染相关的东西，当前是没有办法进行root的更新的。
3. 改进 get root 方法用_renderToDOM替换它，并用Symbol来创建这个私有方法
4. 在  ElementWrapper和TextWrapper类也加renderToDOM方法
5. 改造render方法 创建Range对象 用 document.createRange() 使用renderToDOM现实，基于range的重新绘制dom;这里的重新绘制对于下一步的虚拟dom也是至关重要的。（range未知知识）
6. 用同5的方法，将ElementWrapper里的appendChild方法改造
7. 重新绘制 rerender方法
8. setAttribute 加入事件绑定功能
9. setState现实方法
10. ticTacToe 代码调试 
    1. 解决Cannot read property 'Symbol(render to dom)' of null
    2. 处理className问题
    3. 处理range的一个bug
