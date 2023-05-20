import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './styles/Router'

import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeContextProvider } from './contexts/ThemeContext'

export function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
