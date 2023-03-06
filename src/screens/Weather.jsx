import React, { useState } from 'react'
import {FaMap, FaSearch} from 'react-icons/fa'
import DetailCard from '../components/DetailCard';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
const Weather = () => {
    const API_KEY = "750b011386fdd29775e397a29adb8333";

    const [noData, setNoData] = useState("No Data Yet");
    const [searchTerm, setSearchTerm] = useState("")
    const [weatherData, setWeatherData] = useState([])
    const [city, setCity] = useState("Barrie")
    const [weatherIcon, setWeatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}10n@2x.png`)

    const myIP = "123";
    const handleSubmit = () => {
        //    
    }

  return (
    <div className='bg-gray-800 flex items-center justify-center w-screen h-screen py-10'>
        <div className="flex w-3/4 min-h-full rounded-3xl shadow-lg m-auto bg-gray-100">
            <div className="form-container">
                <div className="flex items-center-justify-center">
                    <h3 className='my-auto mr-auto text-xl text-pink-800 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-30'>
                        forecast
                    </h3>
                    <div className='flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg'>
                        <FaMap className='my-auto'/>
                        <div className="text-right">
                            <p className="font-semibold text-sm ml-2">{city}</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className='text-white text-2xl'>The Only Weather Forecast App That you need</h1>
                    <hr className='h-1 bg-white w-1/4 rounded-full my-5'/>
                    <form noValidate onSubmit={handleSubmit} className="flex justify-center w-full">
                        <input type="text" className='relative rounded-xl py-2 px-3 w-2/3 bg-gray-300'/>
                        <FaSearch className='text-white ml-10 border-1 my-auto z-10 cursor-pointer p-3' onClick={() => navigator.geolocation.getCurrentPosition(myIP)}/>
                    </form>
                </div>
            </div>
            <div className='w-2/4 p-5'>
                <Header/>
                <div className='flex-flex-col my-10'>
                    { weatherData.length === 0 ? 
                    <div className='container p-4 flex items-center justify-center h-1/3 mb-auto'>
                        <h1 className='text-gray-300 text-4xl font-bold uppercase'>{noData}</h1>
                    </div> : 
                    <>
                        <h1 className='text-5xl text-gray-800 mt-auto mb-4'>Today</h1>
                        <DetailCard weather_icon={weatherIcon} data={weatherData}/>
                        <h1 className='text-3xl text-gray-600 mb-4 mt-10'>More on {city}</h1>
                        <ul className="grid grid-cols-2 gap-2">
                            {
                                weatherData.list.map((days, index) => {
                                    if(index > 0) {
                                        return (<SummaryCard key={index} day={days}/>)
                                    }
                                })
                            }
                        </ul>
                    </>    
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Weather