import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({ userName, password })
    }
    return (
        <>
            <h2>Login Here</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="USERNAME" />
            {"      "}
            <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
            />
            <button
                onClick={handleClick}>
                Submit
            </button>
        </>
    )
}

export default Login