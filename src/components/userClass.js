import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                name:"XYZ",
                location:"XYZ"
            }
        }
        //console.log(this.props.name+"constructor");
    }

    async componentDidMount(){
        //console.log(this.props.name+"didmount");
        const data= await fetch("https://api.github.com/users/IshanTaunk");
        const dataJson = await data.json();

        console.log(dataJson);
        this.setState({
            userInfo: dataJson
        })
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        console.log(this.props.name+"render");
        const {name,location,avatar_url} = this.state.userInfo;

        return (
            <div className='user-card'>
                <img src={avatar_url}/>
                <h1>{name}</h1>
                <h3>Location: {location}</h3>
                <h4>Contact: ishan.taunk444</h4>
            </div>
          ) 
    }
}

export default UserClass;