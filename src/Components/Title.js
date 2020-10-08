import React from 'react'
import styled from 'styled-components'

const h1c = styled.h1`
    font-size: 2rem;
    
`

function Title(props){
    const {title} = props
    return(
        <h1>{title}</h1>
    )
}
export default Title