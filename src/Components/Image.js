import React from 'react'
import styled from 'styled-components'

const Styledimg = styled.img`
    width: 80vh;
`

function Image(props){
    const {imageURL} = props

    return(
        <div className = 'imageContain'>
            <Styledimg src = {imageURL} alt = 'picture of the day'></Styledimg>
        </div>
    )
}

export default Image