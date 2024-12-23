import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
function Card() {
    const { theme } = useContext(ThemeContext)
    if (theme) return (<>
        <h3>hi</h3>
        <h2>{theme.presentTheme}</h2>
        <h4>{theme.darkTheme}</h4>
    </>
    )
}
export default Card