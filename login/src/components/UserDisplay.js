import React from 'react';
import {Link} from 'react-router-dom';

const UserDisplay = (props) => {

    const renderList = ({userData}) => {
        if(userData){
            return userData.map((item) => {
                return(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.email}</div>
                    </div>
                )
            })
        }
    }
    return(
        <div className="artist_list">
            <h4>List Of Users</h4>
             {renderList(props)}
        </div>
    )
}

export default UserDisplay;