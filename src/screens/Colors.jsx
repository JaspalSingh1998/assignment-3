import React, { useState } from 'react'
import Values from 'values.js'
import SingleColor from '../components/SingleColor';

const Colors = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    
    try {
        let colors = new Values(color).all(10)
        setList(colors)
        setColor("")
    } catch (error) {
        console.log(error)
    }

  }  

  return (
    <div className='flex flex-col bg-slate-100 w-full'>
        <section className="w-full flex flex-col md:flex-row items-center gap-10 p-10">
            <h3 className='font-bold text-4xl mb-4 md:mb-0'>Color Generator</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" className="p-4 text-md text-gray-400"/>
                <button className='bg-[#53B1EE] py-4 px-6 text-white text-md'>Submit</button>
            </form>
        </section>
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {list.map((color, index) => (
                <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
            ))}
        </section>
    </div>
  )
}

export default Colors