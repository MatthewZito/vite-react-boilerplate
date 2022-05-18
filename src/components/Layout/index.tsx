import React from 'react'

import { ThemeProvider } from '@/styles/Theme'

interface LayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>
}
