import React, {Component} from 'react';

const profileurl = "http://localhost:5000/api/auth/userinfo";

class Profile extends Component {
    constructor(){
        super()

        this.state={
            user:''
        }

        this.handleLogout=this.handleLogout.bind(this);
    }

    handleLogout(){
        localStorage.removeItem('Token')
        this.props.history.push('/login')
    }


    componentDidMount(){
        fetch(profileurl,{
            method:'GET',
            headers:{
                'x-access-token':localStorage.getItem('Token')
            }
        })
        .then((userres) => userres.json())
        .then((userdata) => {
           this.setState({
               user:userdata
           })
        })
    }

    render(){
        return(
            <div>
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3> User Profile</h3>
                    </div>
                    <div className="panel-body">
                        <h1>Hi {this.state.user.name}</h1>
                        <h2>Your email is {this.state.user.email}</h2>
                    </div>
                    <button className="btn btn-danger"
                        onClick={this.handleLogout}>
                            Logout
                    </button>
                </div>
            </div>
        </div> 
        )
    }
}


export default Profile