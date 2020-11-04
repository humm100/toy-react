const RENDER_TO_DOM = Symbol("render to dom");

//包装createElement
class ElementWrapper {
    constructor(type){
        this.root = document.createElement(type)
    }

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

    [RENDER_TO_DOM](range){
        //有root的情况下
        //先清空内容
        range.deleteContents();
        //再插入到root里
        range.insertNode(this.root);
        
    }
}

//包装createTextNode
class TextWrapper {
    constructor(content){
        this.root = document.createTextNode(content);
    }

    [RENDER_TO_DOM](range){
        range.deleteContents();
        range.insertNode(this.root);
    }
}

//组件实现类
export class Component {
    constructor(){
        this.props = Object.create(null);
        this.children = [];
        //this._root = null;
        this._range = null;
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
        this.rerender();
    }

    /* _renderToDOM(range){
        this.render()._renderToDOM(range)
    } */


    //用Symbol来创建私有方法，使它变得不太容易访问到，起到一定的保护作用
    [RENDER_TO_DOM](range){
        this._range = range;
        this.render()[RENDER_TO_DOM](range)
    }

    //重新绘制
    rerender(){
        
        let oldRange = this._range;

        let range = document.createRange();
        range.setStart(oldRange.startContainer, oldRange.startOffset);
        range.setEnd(oldRange.startContainer, oldRange.startOffset);
        this[RENDER_TO_DOM](range);

        oldRange.setStart(range.endContainer, range.endOffset);
        oldRange.deleteContents();
    }

    //get方法会在取属性值时触发 PS：set方法就会在属性赋值时触发
    /* get root(){
        if(!this._root){
            this._root = this.render().root;
        }
        return this._root;
    } */
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