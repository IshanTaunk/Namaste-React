import React from "react";
import User from "./User";
import UserClass from "./userClass";
import userContext from "../utils/userContext";

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("parent constructor");
    }

    componentDidMount(){
        //console.log("parent didmount");
    }

    render(){
        //console.log("parent render");
        return (<div>
            <h1>About Us</h1>
            <div>LoggedIn user 
                <userContext.Consumer>
                    {(data)=>{return(<h1>{data.loggedInUser}</h1>)}}
                </userContext.Consumer>
            </div>
            <UserClass name={"Ishan"} location={"Bangalore"} />
        </div>)
    }
}

// const About=()=>{
//     return (<></>)
// }

export default About;