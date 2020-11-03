
//包装createElement
class ElementWrapper {
    constructor(type){
        this.root = document.createElement(type)
    }

    setAttribute(name,value){
        this.root.setAttribute(name, value)
    }

    appendChild(component){
        this.root.appendChild(component.root)
    }
}

//包装createTextNode
class TextWrapper {
    constructor(content){
        this.root = document.createTextNode(content);
    }
}

//组件实现类
export class Component {
    constructor(){
        this.props = Object.create(null);
        this.children = [];
        this._root = null;
    }

    setAttribute(name,value){
        this.props[name] = value;
    }

    appendChild(component){
        this.children.push(component)
    }

    //get方法会在取属性值时触发 PS：set方法就会在属性赋值时触发
    get root(){
        if(!this._root){
            this._root = this.render().root;
        }
        return this._root;
    }
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
    parentElement.appendChild(component.root)
}