
//基础版，简单实现jsx语法糖，只能用以原生元素标签（非自定义组件）
function createElement(type, attributes, ...children){
    let e = document.createElement(type);
    for (let p in attributes){
        e.setAttribute(p, attributes[p]);
    }
    for (let child of children){
        if(typeof child === 'string'){
            child = document.createTextNode(child);
        }
        e.appendChild(child)
    }
    return e;
}

let a = <div id="a" class="c">
    <div>abc</div>
    <div></div>
</div>

document.body.appendChild(a);