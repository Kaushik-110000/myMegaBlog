import React, { useEffect, useState } from 'react';
import val from './val.json'
import { useLoaderData } from 'react-router-dom';
// console.log(va;
function Gitfile() {

    const data= useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(() => {
        // fetch(`https://api.github.com/users/kaushik-110000`)
    //         .then((val) => {
    //     return val.json()
    // }).then((val) => {
    //     setData(val);
    // })
        // setData(val[0]);
        // console.log(data);
    // }, [])

    return (
        <>
            <h1 className='text-center bg-slate-300 h-10 flex justify-center items-center font-semibold'> Your Github id is {data.login}</h1>
            <div className='flex w-[100vw] m-10 justify-center'>
                <div className='m-10'>
                    <img src={data.avatar_url} alt="my_git_image" />
                </div>
                <p className='text-center m-10 '>You have {data.followers} followers.</p>
            </div>
        </>
    )
}
export default Gitfile;

export const gitLoader = async () => {
    const response = await fetch('https://api.github.com/users/kaushik-110000')
    return response.json();
}