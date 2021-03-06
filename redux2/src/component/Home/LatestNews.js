import React from 'react';
import { Link } from 'react-router-dom';

const LatestNews  =(props) => {

    const renderLatest = ({latestArray}) => {
        if(latestArray){
            return latestArray.map((data) => {
                return(
                    <Link to={`/details/${data.id}`} className="item" key={data.id}>
                        <div className="image_cover"
                        style={{background:`url('/images/articles/${data.img}')`}}>
                            <div className="description">
                                <span>{data.category}</span>
                                <div>{data.title}</div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <div className="home-latest">
            {renderLatest(props)}
        </div>
    )
}

export default LatestNews;