import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import { Window, TitleBar } from "react-desktop/macOs"
import Draggable from "react-draggable"
import { FlexColumn, FlexRow } from "./styled"

import {
  brandStory,
  nameTypes,
  meaningBehindName,
  streamOfConsciousness,
  culturalIcons,
  nameIdeas,
} from "./brandingStory"

function MDWindow() {
  const [brandStoryIsFullScreen, setBrandStoryIsFullScreen] = useState(false)
  const [brandStoryIsVisible, setBrandStoryIsVisible] = useState(true)
  //   const [nameTypesIsFullScreen, setNameTypesIsFullScreen] = useState(false)
  //   const [nameTypesIsVisible, setNameTypesIsVisible] = useState(false)
  //   const [
  //     meaningBehindNameIsFullScreen,
  //     setMeaningBehindNameIsFullScreen,
  //   ] = useState(false)
  //   const [meaningBehindNameIsVisible, setMeaningBehindNameIsVisible] = useState(
  //     false
  //   )
  //   const [
  //     streamOfConsciousnessIsFullScreen,
  //     setStreamOfConsciousnessIsFullScreen,
  //   ] = useState(false)
  //   const [
  //     streamOfConsciousnessIsVisible,
  //     setStreamOfConsciousnessIsVisible,
  //   ] = useState(false)

  //   const [culturalIconsIsFullScreen, setCulturalIconsIsFullScreen] = useState(
  //     false
  //   )
  //   const [culturalIconsIsVisible, setCulturalIconsIsVisible] = useState(false)

  //   const [nameIdeasIsFullScreen, setNameIdeasIsFullScreen] = useState(false)
  //   const [nameIdeasIsVisible, setNameIdeasIsVisible] = useState(false)
  return (
    <>
      <FlexRow>
        <Draggable>
          <div>
            <Window
              hidden={!brandStoryIsVisible}
              chrome
              height="auto"
              width="400px"
              padding="10px"
            >
              <TitleBar
                isFullscreen={brandStoryIsFullScreen}
                onCloseClick={() => console.log("Close window")}
                onMinimizeClick={() => setBrandStoryIsVisible(true)}
                onMaximizeClick={() => setBrandStoryIsFullScreen(true)}
                onResizeClick={() => setBrandStoryIsFullScreen(false)}
                title="Brand Story"
                controls
              />
              <FlexColumn>
                <ReactMarkdown plugins={[gfm]} children={brandStory} />
              </FlexColumn>
            </Window>
          </div>
        </Draggable>

        <Draggable>
          <div>
            <Window
              hidden={!brandStoryIsVisible}
              chrome
              height="auto"
              width="500px"
              padding="10px"
            >
              <TitleBar
                isFullscreen={brandStoryIsFullScreen}
                onCloseClick={() => console.log("Close window")}
                onMinimizeClick={() => setBrandStoryIsVisible(true)}
                onMaximizeClick={() => setBrandStoryIsFullScreen(true)}
                onResizeClick={() => setBrandStoryIsFullScreen(true)}
                title="Name Types"
                controls
              />
              <FlexColumn>
                <ReactMarkdown plugins={[gfm]} children={nameTypes} />
              </FlexColumn>
            </Window>
          </div>
        </Draggable>

        <Draggable>
          <div>
            <Window
              hidden={!brandStoryIsVisible}
              chrome
              height="auto"
              width="600px"
              padding="10px"
            >
              <TitleBar
                isFullscreen={brandStoryIsFullScreen}
                onCloseClick={() => console.log("Close window")}
                onMinimizeClick={() => setBrandStoryIsVisible(true)}
                onMaximizeClick={() => setBrandStoryIsFullScreen(true)}
                onResizeClick={() => setBrandStoryIsFullScreen(true)}
                title="Meaning Behind Name"
                controls
              />
              <FlexColumn>
                <ReactMarkdown plugins={[gfm]} children={meaningBehindName} />
              </FlexColumn>
            </Window>
          </div>
        </Draggable>
      </FlexRow>
      <div style={{height: '20px'}}>
      <FlexRow>
        <Draggable>
          <div>
            <Window
              hidden={!brandStoryIsVisible}
              chrome
              height="auto"
              width="600px"
              padding="10px"
            >
              <TitleBar
                isFullscreen={brandStoryIsFullScreen}
                onCloseClick={() => console.log("Close window")}
                onMinimizeClick={() => setBrandStoryIsVisible(true)}
                onMaximizeClick={() => setBrandStoryIsFullScreen(true)}
                onResizeClick={() => setBrandStoryIsFullScreen(true)}
                title="Stream of Consciousness"
                controls
              />
              <FlexColumn>
                <ReactMarkdown
                  plugins={[gfm]}
                  children={streamOfConsciousness}
                />
              </FlexColumn>
            </Window>
          </div>
        </Draggable>

        <Draggable>
          <div>
            <Window
              hidden={!brandStoryIsVisible}
              chrome
              height="auto"
              width="400px"
              padding="10px"
            >
              <TitleBar
                isFullscreen={brandStoryIsFullScreen}
                onCloseClick={() => console.log("Close window")}
                onMinimizeClick={() => setBrandStoryIsVisible(true)}
                onMaximizeClick={() => setBrandStoryIsFullScreen(true)}
                onResizeClick={() => setBrandStoryIsFullScreen(true)}
                title="Cultural Icons"
                controls
              />
              <FlexColumn>
                <ReactMarkdown plugins={[gfm]} children={culturalIcons} />
              </FlexColumn>
            </Window>
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Window
              hidden={!brandStoryIsVisible}
              chrome
              height="auto"
              width="400px"
              padding="10px"
            >
              <TitleBar
                isFullscreen={brandStoryIsFullScreen}
                onCloseClick={() => console.log("Close window")}
                onMinimizeClick={() => setBrandStoryIsVisible(true)}
                onMaximizeClick={() => setBrandStoryIsFullScreen(true)}
                onResizeClick={() => setBrandStoryIsFullScreen(true)}
                title="Name Ideas"
                controls
              />
              <FlexColumn>
                <ReactMarkdown plugins={[gfm]} children={nameIdeas} />
              </FlexColumn>
            </Window>
          </div>
        </Draggable>
      </FlexRow>
    </>
  )
}

export default MDWindow
