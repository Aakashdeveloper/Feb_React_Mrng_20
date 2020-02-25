import React from 'react';

const NewsList = (props) => {
    console.log("news display",props)

    const renderList = props.datalist.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })
    return(
        <React.Fragment>
            {renderList}
        </React.Fragment>
    )
}

export default NewsList;