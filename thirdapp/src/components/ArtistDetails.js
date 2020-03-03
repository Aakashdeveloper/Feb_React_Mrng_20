import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';

const url="http://localhost:8900/artists";

class ArtistDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }
    render(){
        const mydata= this.state.details;
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{
                            background:`url('/images/covers/${mydata.cover}.jpg')`
                        }}>
                        </span>
                        <h3>{mydata.name}</h3>
                        <div className="bio_text">
                            {mydata.bio}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        axios.get(`${url}/${this.props.match.params.id}`)
        .then((response) => {
            this.setState({details:response.data})
        })
    }
}

export default ArtistDetails