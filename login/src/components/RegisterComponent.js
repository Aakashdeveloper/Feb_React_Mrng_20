import React,{Component} from 'react';
import Header from './Header';

const url = "http://localhost:5000/api/auth/register";

class FormsComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            email:'',
            password:''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    handleChangeEmail(event){
        this.setState({email:event.target.value})
    }
    handleChangePassword(event){
        this.setState({password:event.target.value})
    }
    

    handleSubmit(){
        var data={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
        }

        fetch(url, {
                method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/'))
        
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Register User</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Names</label>
                                <input type="text" className="form-control"
                                id="name" value={this.state.name}
                                onChange={this.handleChangeName}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>email</label>
                                <input type="text" className="form-control"
                                id="email" value={this.state.email}
                                onChange={this.handleChangeEmail}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Passsword</label>
                                <input type="text" className="form-control"
                                id="password" value={this.state.password}
                                onChange={this.handleChangePassword}
                                />
                            </div>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormsComponent;
