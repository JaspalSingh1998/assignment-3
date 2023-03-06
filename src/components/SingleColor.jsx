import React from 'react'
import { toast } from 'react-toastify'
import { rgbToHex } from '../utils'

const SingleColor = ({rgb,weight,index,hexColor}) => {
    const bcg = rgb.join(",")
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

  return (
    <article className={`px-6 py-10 cursor-pointer ${index > 10 && 'text-white'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {
        toast.success('Color is copied to clipboard!')
        navigator.clipboard.writeText(hexValue);
    }}>
    <p className='mb-2'>{weight}%</p>
    <p className='text-md font-bold'>{hexValue}</p>
    </article>
  )
}

export default SingleColor