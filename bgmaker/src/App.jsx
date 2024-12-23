import { useState } from 'react'
import Buttona from './buttona'

function App() {
  const colors = [
    "#B91C1C", // red-700
    "#CA8A04", // yellow-600
    "#93C5FD", // blue-300
    "#5EEAD4", // teal-300
    "#4338CA", // indigo-700
    "#A78BFA", // purple-400
    "#A21CAF", // fuchsia-700
    "#FB7185", // rose-400
    "#F97316", // orange-500
    "#F59E0B", // amber-500
    "#A3A3A3", // neutral-400
    "#FCA5A5", // red-200
    "#78350F", // amber-900
    "#047857", // green-700
  ];
  const [bg, setbg] = useState("#000");
  return (

    <>
      <div className='min-w-screen min-h-screen mx-auto grid'
        style={{ backgroundColor: bg }}>
        <div className="buttons mx-auto mt-auto mb-10 flex bg-white p-2 rounded-xl">
          {
            colors.map((col, index) => (
              <Buttona key={index} cola={col} fun={setbg} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
