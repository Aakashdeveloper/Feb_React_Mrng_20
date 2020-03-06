import React, {Component} from 'react';
//connect to redux get state and dispatch action
import { connect } from 'react-redux';
import {latestNews} from '../actions';
import { bindActionCreators } from 'redux';

class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
    }

    render(){
        return(
            <div>Home</div>
        )
    }
}

//recive state from store
function mapStateToProps(state){
    console.log(state)
}

//Help to dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)