//Get Initial State
//Set Initial State
//Before getting created
//render
//After getting created

import React, {Component} from 'react';

class LifeCycle extends Component {
    //1 Get Initial State
    constructor(props){
        super(props)
        console.log("Inside constructor")

    //2 Set Initial State
        this.state={
            title:'LifeCycle'
        }
    }
    //3 Before getting created(For change state)
    componentWillMount(){
        console.log('Before getting created')
    }

    //Before state is updating
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    //After state is update
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    //Check State Change
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate");
        if(nextState.title === this.state.title){
            return false
        }else{
            return true
        }
    }

    //4render
    render(){
        console.log('Inside Render')
        return(
            <div>
                <h1>{this.state.title}</h1>
                <div className="btn btn-success"
                onClick={() => {this.setState({title:'Something else'})}}>
                    Click Me
                </div>
            </div>
        )
    }

    //5 After getting created(For Calling Api)
    componentDidMount(){
        console.log('After getting created')
    }

    componentWillUnmount(){
        alert('You are leaving the page')
    }
}

export default LifeCycle;