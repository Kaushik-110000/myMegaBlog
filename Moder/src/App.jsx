import { useState, useEffect } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeButton from '../../Moder/src/components/ThemeButton'
import Card from './components/card'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const darkTheme = () => {
    setThemeMode("dark")
  }
  const lightTheme = () => {
    setThemeMode("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <>
      <h1 className='text-center text-5xl underline font-bold'>Hello</h1>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>

      </ThemeProvider>
    </>
  )
}

export default App
