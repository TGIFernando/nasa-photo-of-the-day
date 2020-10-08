import React from 'react'
import styled from 'styled-components'

const H1c = styled.h1`
    font-size: 4rem;
    display:flex;
    justify-content: center;
    width: 48%;
    margin: 1rem 42rem 0 58rem;
`

function Title(props){
    const {title} = props
    return(
        <H1c>{title}</H1c>
    )
}
export default Title