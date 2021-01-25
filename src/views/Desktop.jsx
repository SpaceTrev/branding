import React from 'react'
import Draggable from 'react-draggable';
import { AppContainer } from './styled'


const Desktop = (children)=> {
    return (
    <AppContainer>
        <Draggable>
            {children}
        </Draggable>
    </AppContainer>
    )
}

export default Desktop