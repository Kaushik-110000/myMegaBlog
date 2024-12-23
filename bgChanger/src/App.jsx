import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numChecked, setNumChecked] = useState(false);
  const [charChecked, setCharChecked] = useState(false);
  const [pass, setPass] = useState("");

  const PassGenerator = useCallback(() => {
    let pass = "";
    let mod = 51;
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //52
    if (numChecked) str += "0123456789", mod += 10; //10
    if (charChecked) str += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~", mod += 32; //32

    for (let i = 0; i < length; i++) {
      pass += (str[Math.floor(Math.random() * 1000) % mod])
    }
    setPass(pass);
    // console.log(pass);
  }, [length, numChecked, charChecked, setPass])

  const passRef = useRef(null);

  useEffect(() => { PassGenerator() }, [length, numChecked, charChecked, PassGenerator])

  const copyPass = () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(pass);
  }

  function HandleSliderChange(e) {
    setLength(e.target.value);
  }
  return (
    <>
      <div className="main bg-black h-screen w-screen grid justify-center">
        <div className="hero bg-gray-600 w-[40rem] h-[10rem] mt-[5rem] rounded-xl grid justify-center">
          <div className="pass flex mt-6">
            <input type="text" className="w-[30rem] h-[2rem] mr-3 " value={pass} placeholder="hi" readOnly ref={passRef}></input>
            <button className="bg-blue-500 h-[2rem] w-[5rem] p-4 flex items-center justify-center rounded-sm" onClick={copyPass}>
              COPY
            </button>
          </div>
          <div className="bot flex h-[2rem] items-center">
            <div className="slide flex items-center">
              <input type="range" min="0" max="30" value={length} className="lengthSlider" onChange={HandleSliderChange}></input>
              <p className="ml-2">Length : ({length})</p>
            </div>
            <div className="num ml-5 flex items-center">
              <input type="checkbox" className="NumberTick"
                onChange={(e) => setNumChecked(e.target.checked)} />
              <p className="ml-2">Numbers</p>
            </div>
            <div className="char ml-5 flex items-center">
              <input type="checkbox" className="CharTick" onChange={(e) => setCharChecked(e.target.checked)} />
              <p className="ml-2">Special Symbol</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
