import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Box } from "@rebass/grid"

import Sidebar from "./sidebar"
import { rhythm } from "../utils/typography"
import { darkTheme, lightTheme } from "../utils/theme.js"

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 880px;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(1)};
`

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={darkTheme}>
        <PageWrapper>
          <ContentWrapper>
            <Box width={[1, 1 / 3, 1 / 4]}>
              <Sidebar />
            </Box>
            <Box width={[1, 2 / 3, 3 / 4]}>{children}</Box>
          </ContentWrapper>
        </PageWrapper>
      </ThemeProvider>
    )
  }
}

export default Layout
