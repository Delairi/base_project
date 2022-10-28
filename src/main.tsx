import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from 'styled-components'
import { Theme } from './Theme/Theme'
import { GlobalStyle } from './Theme/Globa'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={Theme}>
      <GlobalStyle/>
    <App />
    </ThemeProvider>
)
