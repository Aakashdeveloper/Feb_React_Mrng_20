import React,{Component} from 'react';
import Header from './Header';
import NewsList from './NewsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            title:'Home Page App',
            news:JSON
        }
    }

    render(){
        //console.log(JSON)
        return(
            <React.Fragment>
                <Header/>
                <NewsList datalist={this.state.news}/>
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