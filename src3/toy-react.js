const RENDER_TO_DOM = Symbol("render to dom");

//组件实现类
export class Component {
    constructor(){
        this.props = Object.create(null);
        this.children = [];
        //this._root = null;
        this._range = null;
        this._vdom = null;
    }

    setAttribute(name,value){
        this.props[name] = value;
    }

    appendChild(component){
        this.children.push(component)
    }

    setState(newState){
        
        if(this.state === null || typeof this.state !== "object") {
            this.state = newState;
            this.rerender();
            return;
        }

        //console.log(newState)

        let merge = (oldState, newState) => {
            for(let p in newState){
                if(oldState[p] === null || typeof oldState[p] !== "object"){
                    oldState[p] = newState[p];
           
                }else{
                    merge(oldState[p], newState[p]);
                }
            }
        }
        merge(this.state, newState);
        //this.rerender();
        this.update();
    }


    get vdom() {
        return this.render().vdom;
    }

/*     get vchildren() {
        return this.children.map(child => child.vdom)
    } */

    /* _renderToDOM(range){
        this.render()._renderToDOM(range)
    } */


    //用Symbol来创建私有方法，使它变得不太容易访问到，起到一定的保护作用
    [RENDER_TO_DOM](range){
        this._range = range;
        //this._vdom 以后充当旧的vdom
        this._vdom = this.vdom;
        //this.render()[RENDER_TO_DOM](range)
        this._vdom[RENDER_TO_DOM](range)
    }

    update() {
        
        let isSameNode = (oldNode, newNode) => {

            //对比type
            if(oldNode.type !== newNode.type) {
                return false;
            }

            //对比 props

            //旧的属性比新的多也认为不同的
            if(Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {
                return false
            }

            //属性值对比
            for(let name in newNode.props) {
                if(newNode.props[name] !== oldNode.props[name]) {
                    return false;
                    
                }
            } 

            //比对content节点
            if(newNode.type === "#text") {
                if(newNode.content !== oldNode.content)
                return false
            }

            


            return true;
        }

        let update = (oldNode, newNode) => {
            // type, props, children
            // #text content 
            // w: 把这个props打patch是什么东西？！！

            if(!isSameNode(oldNode, newNode)){
                newNode[RENDER_TO_DOM](oldNode._range)
                return;
            }

            newNode._range = oldNode._range;

            
            let newChildren = newNode.vchildren;
            let oldChildren = oldNode.vchildren;

            if(!newChildren || !newChildren.length){
                return;
            }
            let tailRange = oldChildren[oldChildren.length - 1]._range;

            for(let i = 0; i < newChildren.length; i++) {
                let newChild = newChildren[i];
                let oldChild = oldChildren[i];
                if(i < oldChildren.length){
                    update(oldChild,newChild);
                }else{
                    let range = document.createRange();
                    range.setStart(tailRange.endContainer, tailRange.endOffset)
                    range.setEnd(tailRange.endContainer, tailRange.endOffset)
                    
                    newChild[RENDER_TO_DOM](range)
                    tailRange = range;

                }
            }



        }
        let vdom = this.vdom;
        update(this._vdom, vdom);
        //更新后将旧的_vdom给它替换掉
        this._vdom = vdom;
    }

    //重新绘制 改为update的形式，实现比对更新，不再全量rerender
    /* rerender(){
        
        let oldRange = this._range;

        let range = document.createRange();
        range.setStart(oldRange.startContainer, oldRange.startOffset);
        range.setEnd(oldRange.startContainer, oldRange.startOffset);
        this[RENDER_TO_DOM](range);

        oldRange.setStart(range.endContainer, range.endOffset);
        oldRange.deleteContents();
    } */

    //get方法会在取属性值时触发 PS：set方法就会在属性赋值时触发
    /* get root(){
        if(!this._root){
            this._root = this.render().root;
        }
        return this._root;
    } */
}

//包装createElement
class ElementWrapper extends Component{
    constructor(type){
        super(type);
        this.type = type;
        //this.root = document.createElement(type) //不在这里创建dom，延迟到RENDER_TO_DOM里创建
    }

    /*

    已在Component类继承了，相关逻辑处理需求移到RENDER_TO_DOM实现

    setAttribute(name,value){
        if(name.match(/^on([\s\S]+)$/)){
            //以on开头的属性，要绑定事件
            this.root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c=> c.toLowerCase()), value);

            //PS:[\s\S]表示任务字符


        }else{

            if(name === "className"){
                this.root.setAttribute("class", value)
            }else{
                this.root.setAttribute(name, value) 
            }
            
        }
        
    }

    appendChild(component){

        //this.root.appendChild(component.root)

        let range = document.createRange();
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        component[RENDER_TO_DOM](range)

    }

    */

    get vdom() {
        this.vchildren = this.children.map(child => child.vdom)
        return this;

        /* return {
            type: this.type,
            props: this.props,
            children: this.children.map(child => child.vdom)
        } */
    }

    [RENDER_TO_DOM](range){

        this._range = range;

        let root = document.createElement(this.type)

        //props属性处理 对应的就是原来setAttribute， 所以就是搬迁原来setAttribute的逻辑
        for(let name in this.props){
            let value = this.props[name];
            if(name.match(/^on([\s\S]+)$/)){
                //以on开头的属性，要绑定事件
                root.addEventListener(RegExp.$1.replace(/^[\s\S]/, c=> c.toLowerCase()), value);

                //PS:[\s\S]表示任务字符
    
            }else{
    
                if(name === "className"){
                    root.setAttribute("class", value)
                }else{
                    root.setAttribute(name, value) 
                }
            }
        }

        //children处理 对应的就是原来的appendChild

        if(!this.vchildren) {
            this.vchildren = this.children.map(child => child.vdom)
        }

        for(let child of this.vchildren) {
            let childRange = document.createRange();
            childRange.setStart(root, root.childNodes.length);
            childRange.setEnd(root, root.childNodes.length);
            child[RENDER_TO_DOM](childRange)
        }

        replaceContent(range,root);
        
    }
}

//包装createTextNode
class TextWrapper extends Component{
    constructor(content){
        super(content);
        this.type = "#text"
        this.content = content;
    }

    get vdom() {

        return this;

        /* return {
            type: "#text",
            content: this.content
        } */
    }

    [RENDER_TO_DOM](range){
        this._range = range;
        /* range.deleteContents();
        range.insertNode(this.root); */

        let root = document.createTextNode(this.content);
        replaceContent(range,root);
    }
}

//对range先插入后删除操作
function replaceContent(range, node) {
    range.insertNode(node);
    range.setStartAfter(node);
    range.deleteContents();

    range.setStartBefore(node);
    range.setEndAfter(node);
}

export function createElement(type, attributes, ...children){


    //let e = document.createElement(type);
    //let e = typeof type === "string" ? document.createElement(type) : new type;

    //使用包装createElement
    let e = typeof type === "string" ? new ElementWrapper(type) : new type;
    
    //属性展开
    for (let p in attributes){
        e.setAttribute(p, attributes[p]);
    }

    //节点生成方法，实现递归复用
    let insertChildren = (children) =>{
        //children展开
        for (let child of children){

            if(child === null){
                continue;
            }

            if(typeof child === 'string'){
                //child = document.createTextNode(child);
                //使用包装createTextNode
                child = new TextWrapper(child);
            }
            
            if(typeof child === 'object' && child instanceof Array){
                //children为children对象时继续展开
                insertChildren(child);
            }else{
                //最后插入到节点里
                e.appendChild(child);
            }
        }
    }

    insertChildren(children);
    
    return e;
}

export function render(component, parentElement){
    //parentElement.appendChild(component.root)
    
    
    let range = document.createRange(); //range对象表示文档中的连续范围（这个要加强研究）
    //range对象的知识：https://www.w3school.com.cn/xmldom/dom_range.asp
    //PS:range对象所有属性都是只读的，不能通过设置这些属性改变范围的开始点和结束点，必须调用 setEnd() 方法和 setStart() 方法实现这一点。
    
    range.setStart(parentElement, 0); //开始节点
    range.setEnd(parentElement, parentElement.childNodes.length); //结束节点
    range.deleteContents();
    component[RENDER_TO_DOM](range)
}