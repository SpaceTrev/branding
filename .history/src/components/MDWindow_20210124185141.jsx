import React from "react"
import { TitleBar, Window, Text } from './styled'

function MDWindow() {
  return (
      <Window   
      chrome
      height="300px"
      padding="10px">
        <TitleBar title="Branding Strategy" controls/>
      </Window>
  )
}

export default MDWindow
