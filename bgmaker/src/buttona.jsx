import React, { useState } from "react";
function Buttona({ cola, fun }) {
    return (
        <>
            <h1 className="h-14 w-14 rounded-xl mx-2"
                style={{ backgroundColor: cola }}
                onClick={() => { fun(cola) }}>
            </h1 >
        </>
    )
}
export default Buttona