import React from "react"

import {
    Window,
    TitleBar,
    Text 
  } from "react-desktop/macOs"

function MDWindow() {
  return (
      <Window   
      chrome
      height="300px"
      padding="10px">
        <TitleBar title="Branding Strategy" controls/>
        <Text>
            Hey
        </Text>
      </Window>
  )
}

export default MDWindow
