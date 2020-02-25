import React, {Component} from 'react';
import './Header.css';

class Header extends Component {

    render(){
        return(
            <React.Fragment>
                <header>
                    <div className="logo">React App</div>
                    <br/>
                    <center>
                        <input placeholder="User Text here"/>
                    </center>
                </header>
            </React.Fragment>
        )
    }
}


export default Header;