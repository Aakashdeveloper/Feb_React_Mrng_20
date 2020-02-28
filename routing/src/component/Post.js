import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <center>
                    <h2>Post Page</h2>
                </center>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <h3>About Post</h3>
                    <p>lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum</p>
                </div>
                <h3>JavaScript</h3>
                <Link to="/post/Javascript">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node">Details</Link>
                <h3>React</h3>
                <Link to="/post/React">Details</Link>
                <h3>Angular</h3>
                <Link to="/post/Angular">Details</Link>
                <h3>Python</h3>
                <Link to="/post/Python">Details</Link>
            </div>
        </div>
    )
}

export default Post;