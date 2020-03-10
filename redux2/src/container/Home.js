import React, {Component} from 'react';
//connect to redux get state and dispatch action
import { connect } from 'react-redux';
import {latestNews,articleNews,galleryNews} from '../actions';
import { bindActionCreators } from 'redux';

import Latest from '../component/Home/LatestNews';
import Article from '../component/Home/ArticleNews';
import Gallery from '../component/Home/GalleryNew';

class Home extends Component{
    componentDidMount(){
        this.props.latestNews()
        this.props.articleNews()
        this.props.galleryNews()
    }

    render(){
        return(
            <React.Fragment>
              <Latest latestArray={this.props.myarticle.latestdata}/>
              <Article articleArray={this.props.myarticle.articledata}/>
              <Gallery galleryArray={this.props.mygallery.gallerydata}/>  
            </React.Fragment>
        )
    }
}

//recive state from store
function mapStateToProps(state){
    console.log(state)
    return{
        myarticle:state.articles,
        mygallery:state.gallery
    }
}

//Help to dispatch action
function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews,articleNews,galleryNews}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)