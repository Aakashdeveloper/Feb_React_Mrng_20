import React,{Component} from 'react';
import Header from './Header';

const url = "http://localhost:8900/artists";

class FormsComponent extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            cover:'',
            bio:''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCover=this.handleChangeCover.bind(this);
        this.handleChangeBio=this.handleChangeBio.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeName(event){
        this.setState({name:event.target.value})
    }
    handleChangeCover(event){
        this.setState({cover:event.target.value})
    }
    handleChangeBio(event){
        this.setState({bio:event.target.value})
    }

    handleSubmit(){
        var random  = Math.floor(Math.random()*10000)
        var data={
            "id":random,
            "name":this.state.name,
            "cover":this.state.cover,
            "bio":this.state.bio,
            "albums": [
                {
                  "albumId": "d1",
                  "title": "The Wall",
                  "year": 1979,
                  "cover": "the_wall",
                  "price": 20
                },
                {
                  "albumId": "d2",
                  "title": "The Dark Side of the Moon",
                  "year": 1973,
                  "cover": "dark_side",
                  "price": 25
                },
                {
                  "albumId": "d3",
                  "title": "Animals",
                  "year": 1977,
                  "cover": "animals",
                  "price": 15
                }
              ],
            "genre": "Rock"
        }

        fetch(url, {
                method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/'))
        
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="container">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3>Artist Data</h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Names</label>
                                <input type="text" className="form-control"
                                id="name" value={this.state.name}
                                onChange={this.handleChangeName}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Cover</label>
                                <input type="text" className="form-control"
                                id="cover" value={this.state.cover}
                                onChange={this.handleChangeCover}
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Bio</label>
                                <input type="text" className="form-control"
                                id="bio" value={this.state.bio}
                                onChange={this.handleChangeBio}
                                />
                            </div>
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormsComponent;
