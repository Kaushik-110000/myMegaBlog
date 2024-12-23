import React, { useState, useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'

function ThemeButton() {
    const [presentTheme, setPresentTheme] = useState("light")
    const [darkTheme, setDarkTheme] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    const { setTheme } = useContext(ThemeContext)

    useEffect(() => {
        document.querySelector("html").classList.remove("dark", "light");
        document.querySelector("html").classList.add(presentTheme)
        setTheme({ presentTheme, darkTheme })
    }, [presentTheme])

    const changeIt = (e) => {
        setIsChecked(!isChecked)
        if (!isChecked) {
            setPresentTheme("dark")
            setDarkTheme(true)
        }
        else {
            setPresentTheme("light")
            setDarkTheme(false)
        }
    }
    return (
        <>
            <h2>Themeerr</h2>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={changeIt}
            />
        </>
    )

}
export default ThemeButton