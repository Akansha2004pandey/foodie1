import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count:0
        }
        console.log(this.props.name+"Child constructor");
    }
    componentDidMount(){
        console.log(this.props.name+"Child Component Rendered");
    }
    render(){
        const {count}=this.state;
        console.log(this.props.name+"child render");
        return (<div class="about">
            <h1>count:{count}</h1>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}>Count increase</button>
        <h2 className="about-name">Name:{this.props.name}</h2>
        <h2 className="about-location">Location:{this.props.location}</h2>
        </div>)
    }
}
export default UserClass;