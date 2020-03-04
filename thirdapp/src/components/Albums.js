import React from 'react';

const AlbumsList = (props) => {
    const showAlbums = ({albumd}) => {
        if(albumd){
            return albumd.map((data) => {
                return(
                    <img src={`/images/albums/${data.cover}.jpg`}/>
                )
            })
        }
    }
    

    return(
        <div className="album_list">
            {showAlbums(props)}
        </div>
    )

}

export default AlbumsList;