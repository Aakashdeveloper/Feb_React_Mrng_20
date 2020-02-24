import React,{Component} from 'react';
import Header from './Header';

class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <Header/>
                <h1>Home Page</h1>
            </React.Fragment>
        )
    }
}


export default Home;



/*
const Home = () => {
    return(
        <h1>Home Page</h1>
    )
}
*/