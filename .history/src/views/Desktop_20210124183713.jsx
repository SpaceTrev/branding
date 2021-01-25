import React from 'react'
import Draggable from 'react-draggable';
import { AppContainer } from './styled'


const Desktop = (children)=> {
    return (
    <AppContainer>
        <Draggable>
            <div>
            <Window>
        <p>Hey</p>
      </Window>
            </div>

        </Draggable>
    </AppContainer>
    )
}

export default Desktop