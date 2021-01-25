import React from 'react'
import Draggable from 'react-draggable';
import MDWindow from '../components/MDWindow';
import { AppContainer } from './styled'


const Desktop = () => {
    return (
    <AppContainer>
        <Draggable>
            <div>
              <MDWindow/>
            </div>
        </Draggable>
    </AppContainer>
    )
}

export default Desktop