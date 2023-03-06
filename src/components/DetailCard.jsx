import moment from 'moment'
import React from 'react'

const DetailCard = ({weather_icon, data}) => {
  const {clouds, main, weather} = data.list[0]  
  return (
    <div className='container p-4 flex items-center justify-center shadow-lg rounded-lg bg-white h-1/3 mb-auto'>
        <div className="my-auto">
            <p className="font-bold text-5xl text-pink-800 mb-2">{Math.round(main.temp)}&deg;c</p>
            <p className="text-4xl text-gray-800 tracking-widest">
                {weather[0].main}
                <img src={weather_icon} alt="" className='w-1/4 inline'/>
            </p>
            <p className="text-gray-400 text-xs uppercase tracking-widest">{weather[0].descriotion}</p>
            <p className="tracking-wider">{moment().format('dddd MM yyyy')}</p>
        </div>
        <div className="my-2 border-l-2 border-gray-100 p-2">
            <div className="text-gray-400 text-lg">RealFeel: {Math.round(main.feel_like)}&deg;C</div>
            <div className="text-gray-400 text-lg">Humidity: {main.humidity}%</div>
            <div className="text-gray-400 text-lg">Cloud Cover: {clouds.all}%</div>
            <div className="text-gray-400 text-lg">Min Temp: {Math.round(main.temp_min)}&deg;C</div>
            <div className="text-gray-400 text-lg">Max Temp: {Math.round(main.temp_max)}&deg;C</div>
        </div>
    </div>
  )
}

export default DetailCard