import React from "react"
import MDWindow from "../components/MDWindow"
import { AppContainer } from "./styled"

const Desktop = () => {
  return (
    <AppContainer>
      <div style={{ height: "40px" }} />

      <div>
        <MDWindow />
      </div>
    </AppContainer>
  )
}

export default Desktop
