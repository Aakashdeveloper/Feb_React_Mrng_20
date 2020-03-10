import React from 'react';
import LazyLoad from 'react-lazyload';

const NewsList = (props) => {
    console.log("news display",props)

    const renderList = props.datalist.map((data) => {
        return(
            <LazyLoad height={200}  throttle={500}>
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
                <img src={data.imageUrl}/>
            </div>
            </LazyLoad>
        )
    })
    return(
            <div>
            {renderList}
            </div>
    )
}

export default NewsList;