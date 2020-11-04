import {createElement, Component, render} from './toy-react'

//子组件MyComponent
class MyComponent extends Component{


    /* 
    //无children版本
    render(){
        return <div>My Component!</div>
    } 
    */

    
    render(){
        return <div>
            <h1>My Component!</h1>
            {this.children}
        </div>
        
    }
}

//jsx模板：
let a = <MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
</MyComponent>

//document.body.appendChild(a);
render(a,document.body);
