import Card from "./components/Card"
import ThemeButton from "./components/ThemeButton"
import ThemeContext from "./context/ThemeContext"
import ThemeContextProvider from './context/ThemeContextProvider'
function App() {
  return (
    <>
      <h1 className="text-center bg-yellow-200 dark:bg-red-600">WELCOME</h1>
      <ThemeContextProvider>
        <ThemeButton/>
        <Card/>
      </ThemeContextProvider>
    </>
  )
}

export default App
