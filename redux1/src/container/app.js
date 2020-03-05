import React, {Component} from 'react';
import { connect} from 'react-redux';
import {MoviesList} from '../actions';
import { bindActionCreators} from 'redux';
import ListMovies from '../component/listmovies'


class App extends Component{
    componentDidMount(){
        this.props.MoviesList()
    }
    render(){
        return(
            <React.Fragment>
                <div>Redux</div>
                <ListMovies list={this.props.mydata}/>
            </React.Fragment>
        )
    }
}

//Will Recive state
function mapStateToProps(state){
    console.log(state)
    return {
        mydata:state.movies
    }
}

//Dispatch/bind actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({MoviesList}, dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App)