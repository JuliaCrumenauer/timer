import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { Router } from './styles/Router'
import { darkMode } from './styles/themes/dark'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={darkMode}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}
