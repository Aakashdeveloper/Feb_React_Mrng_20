import React from 'react';
import ReactDOM from 'react-dom'

//functional component
const App = () => {
    return(
        <div>
            <h1>Home Page component</h1>
            <h2>This is from visual path</h2>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))