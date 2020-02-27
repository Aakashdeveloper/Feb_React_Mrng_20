import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            keyword:'User Text Here'
        }
    }

    inputChange(event){
        console.log(event.target.value)
        this.setState({keyword:event.target.value? event.target.value:"User Text Here"})
        this.props.userText(event.target.value)
    }
    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="logo">React App</div>
                    <br/>
                    <center>
                        <input placeholder="User Text here"
                        onChange={this.inputChange.bind(this)}
                        />
                        <div>
                            <span>{this.state.keyword}</span>
                        </div>
                        
                    </center>
                </header>
            </React.Fragment>
        )
    }
}


export default Header;