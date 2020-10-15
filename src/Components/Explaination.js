import React from 'react'
import styled from 'styled-components'

const StyledExp = styled.div`
    width: 98%;
    height: 80vh;
    border: 3px solid black;
    padding: 3px;
    background: linear-gradient(to bottom right, #9933ff 0%, #000066 100%);
    margin-bottom: 5rem;
    margin-top: 1rem;

`

function Explanation(props){
    const {explain} = props
    return(
        <StyledExp className='exp'>
            <h2 className='expp h2'>Explanation: </h2>
            <p className='expp p'>{explain}</p>
        </StyledExp>
    )
}

export default Explanation