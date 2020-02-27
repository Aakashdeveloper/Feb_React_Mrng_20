import React,{Component} from 'react';
import Header from './Header';
import NewsList from './NewsDisplay';
import JSON from '../db.json';

class Home extends Component {
    constructor(){
        super()

        console.log("inside constructor")
        this.state={
            title:'Home Page App',
            news:JSON,
            filtered:JSON
        }
    }

    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        console.log("inside render")
        //console.log(JSON)
        return(
            <React.Fragment>
                <Header userText={(useinput) => {this.filterNews(useinput)}}/>
                <NewsList datalist={this.state.filtered}/>
            </React.Fragment>
        )
    }
}


export default Home;



/*
add = (a) => {return a+a}

add(1)
*/