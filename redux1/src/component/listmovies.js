import React from 'react'
 
const ListFile = (props) => {
    const renderView = ({list}) => {
        if(list){
            return list.map((item) => {
                return(
                    <div key={item.id}>{item.name}</div>
                )
            })
        }
    }

    return (
        <div>
            {renderView(props)}
        </div>
    )
}

export default ListFile