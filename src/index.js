import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./utils/store"
import { ThemeProvider } from "styled-components"
import theme from "./utils/theme"
import { GlobalStyle } from "./utils/global"
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <App />
        </>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
