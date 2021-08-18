import React, { useState } from "react"

const ThemeContext = React.createContext({ dark: false, smallHeader: false })

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false)
  const [smallHeader, setSmallHeader] = useState(false)

  const makeItDark = () => {
    setDark(true)
  }

  const makeItLight = () => {
    setDark(false)
  }

  const makeHeaderSmall = () => {
    setSmallHeader(true)
  }

  const makeHeaderBig = () => {
    setSmallHeader(false)
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        smallHeader,
        makeItDark,
        makeItLight,
        makeHeaderSmall,
        makeHeaderBig,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }
