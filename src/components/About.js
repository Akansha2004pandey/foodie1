import {Component} from 'react'
import UserClass from "./UserClass";
import UserContext from '../utils/UserContext';



class About extends Component{
      constructor(props){
        super(props);
        console.log("Parent constructor");
      }
      componentDidMount(){
        console.log("Parent mounted ");
      }
      render(){
        console.log("parent rendered");
        return (
            <div>
                <h1>About Food App</h1>
                 <div>
                  LoggedInUser: 
                  <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1> }
                    
                  </UserContext.Consumer>
                 </div>
                <UserClass name={"Akansha"} location={"delhi"}/>
                <UserClass name={"Kanishka"} location={"Delhi"}/>
                
            </div>
        )
      }
}
/*
const About=()=>{
    return (
        <div>
            <h1>About Food App</h1>
             
            <UserClass name={"Akansha"} location={"delhi"}/>
            
        </div>
    )
};
*/
export default About;