import {createElement, Component, render} from './toy-react'

//子组件MyComponent
class MyComponent extends Component{
    constructor(){
        super(); //这样就可以调到继续类Component里的构造函数了
        this.state = {
            a:1,
            b:2
        }
    }
    render(){
        return <div>
            <h1>My Component!</h1>
            {/* <button onclick={()=>{this.state.a++;this.rerender();}}>add</button> */}
            <button onclick={()=>{this.setState({a:this.state.a + 1})}}>add</button>
            <p>{this.state.a.toString()}</p>
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
