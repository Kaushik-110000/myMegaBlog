import React from "react";
import { useParams } from "react-router-dom";
export default function () {
    const { userid } = useParams();
    return (
        <h1 className="flex justify-center bg-gray-600 text-white size-3xl p-5">user: {userid}</h1>
    )
}