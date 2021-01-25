import React from "react"
import Desktop from "./views/Desktop"
import { Window, TitleBar, Text } from "react-desktop/macOs"
function App() {
  return (
    <Desktop>
      <Window>
        <p>Hey</p>
      </Window>
    </Desktop>
  )
}

export default App
