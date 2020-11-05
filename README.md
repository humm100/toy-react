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

    
----------
## 第三课：虚拟DOM的原理和关键实现 （2020-11-5）

1. 去root 代理能力 创建vdom
    1. 整合优化ElementWrapper和TextWrapper，让它们继承 Component 基类，让它们都有了props和children。
    2. 写Component、ElementWrapper、TextWrapper的get vdom

2. 把虚拟dom树转化为实体dom树
    1. 优化ElementWrapper、TextWrapper的get vdom，让它返回this所有；
    2. 写Component的get vchildren
    3. 改造RENDER_TO_DOM 
        1. 去掉this.root，不在构造器里创建dom了，调整为延迟到RENDER_TO_DOM里创建
        2. props属性处理 对应的就是原来setAttribute，搬迁原来setAttribute的逻辑
        3. children处理 对应的就是原来的appendChild, 搬迁原来setAttribute的逻辑

3. vDom对比更新
    1. 去掉rerender 将用update代替，实现比对更新，不再全量rerender
    2. 写update方法，简单Diff判断
    3. 调整 vchildren
    4. 处理range bug 要对range先插入后删除处理
