import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

interface Theme {}

interface ThemeProps {
  children: React.ReactNode
}

const theme: Theme = {}

export function ThemeProvider({ children }: ThemeProps): JSX.Element {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
