import React, {useState} from 'react'

const Calculator = () => {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("")
    }

    const backspace = () => {
        setResult(result.slice(0, result.length - 1))
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString())
        } catch (error) {
            setResult("Error")
        }
    }

  return (
    <div className="grid place-items-center text-center w-[256px] mx-auto bg-[#101116] border-[10px] border-red-100 p-4">
        <form>
            <input type="text"  value={result} className="h-[50px] w-full bg-[#10111600] text-white text-right"/>
        </form>
        <div className='grid grid-cols-4 gap-1 text-white'>
            <button id='clear' onClick={clear} className="col-span-2 rounded-sm px-4 py-2 bg-[#56cbdb]">Clear</button>
            <button id='backspace' onClick={backspace} className="rounded-sm px-4 py-2 bg-[#56cbdb]">C</button>
            <button name="/" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#56cbdb]">&divide;</button>
            <button name="7" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">7</button>
            <button name="8" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">8</button>
            <button name="9" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">9</button>
            <button name="*" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#56cbdb]">&times;</button>
            <button name="4" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">4</button>
            <button name="5" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">5</button>
            <button name="6" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">6</button>
            <button name="-" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#56cbdb]">&ndash;</button>
            <button name="1" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">1</button>
            <button name="2" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">2</button>
            <button name="3" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">3</button>
            <button name="+" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#56cbdb]">+</button>
            <button name="0" onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">0</button>
            <button name="." onClick={handleClick} className="rounded-sm px-4 py-2 bg-[#262834]">.</button>
            <button name="=" onClick={calculate} className="col-span-2 rounded-sm px-4 py-2 bg-[#56cbdb]">=</button>
        </div>
    </div>
  )
}

export default Calculator