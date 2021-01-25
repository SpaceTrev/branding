import React from "react"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {
    Window,
    TitleBar,
    // Text 
  } from "react-desktop/macOs"
import brandingStory from './brandingStory.js'

function MDWindow() {
    console.log(brandingStory)
  return (
      <Window   
      chrome
      height="300px"
      padding="10px">
        <TitleBar title="Branding Strategy" controls/>
        <ReactMarkdown plugins={[gfm]} children={brandingStory} />
      </Window>
  )
}

export default MDWindow
