import React from 'react'
import styled from 'styled-components'

const H1c = styled.h1`
    font-size: 4rem;
    width: 48%;
    margin: 0 auto;
`

function Title(props){
    const {title} = props
    return(
        <H1c>{title}</H1c>
    )
}
export default Title