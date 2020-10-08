import React from 'react'

function Image(props){
    const {imageURL} = props
    console.log(props)
    return(
        <div className = 'imageContain'>
            <img src = {imageURL} alt = 'picture of the day'></img>
        </div>
    )
}

export default Image