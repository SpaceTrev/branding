import React from "react"
import ReactMarkdown from 'react-markdown'

import {
    Window,
    TitleBar,
    // Text 
  } from "react-desktop/macOs"

function MDWindow() {
  return (
      <Window   
      chrome
      height="300px"
      padding="10px">
        <TitleBar title="Branding Strategy" controls/>
        <ReactMarkdown plugins={[gfm]} children={markdown} />
      </Window>
  )
}

export default MDWindow
