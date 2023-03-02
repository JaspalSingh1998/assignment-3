import React, { useEffect, useState } from 'react'
import {FaUser} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { HiOutlineSun, HiNewspaper } from "react-icons/hi";
import axios from 'axios'

const Home = () => {

  const [weatherData, setWeatherData] = useState([]);
  const [newsFeed, setNewsFeed] = useState([]);
  const [matchData, setMatchData] = useState([]);
  const {user} = UserAuth()


  async function getWeatherData() {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=barrie&appId=750b011386fdd29775e397a29adb8333`);
    setWeatherData(response.data);
  }

  async function getNewsFeed() {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=37791e01876c47b29a7750e92b3f8f0d');
    setNewsFeed(response.data.articles);
  }


  async function matchScore() {
      const options = {
      method: 'GET',
      url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard',
      headers: {
        'X-RapidAPI-Key': '7cb36e8ec2mshe7ea1c60753bf92p1531cfjsn8f3d00c0622f',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };

    const {data} = await axios.request(options);
    setMatchData(data.matchHeader)
  }

  useEffect(() => {
    getWeatherData();
    getNewsFeed();
    matchScore();
  }, [])

  return (
    <div className='basis-full p-10'>
      <div>
        <h4>Dashboard</h4>
        <p>Welcome to your Dashboard</p>
      </div>
      <div className='flex mt-10 gap-4'>
        <div className='pa-24 basis-2/5 grid grid-cols-2 gap-2'>
          <div className='border-2 border-rose-500 rounded-md p-4'>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>Current User</p>
              <div>{React.createElement(FaUser, { size: "20" })}</div>
            </div>
            <h2 className='mb-2 font-semi'>{user.displayName || "Goldy"}</h2>
            <div className='flex'>
              <p className='font-thin'>{user.email}</p>
            </div>
          </div>
          <div className='border-2 border-rose-500 rounded-md p-4'>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>{weatherData?.name}, ON</p>
              <div>{React.createElement(HiOutlineSun, { size: "20" })}</div>
            </div>
            <h2 className='mb-2 font-semi'>{(weatherData?.main?.temp - 273.15).toFixed(0)} <span>&#176;</span></h2>
            <div className='flex items-center justify-between'>
              {/* <p className='font-thin capitalize'>{weatherData?.weather[0].description}</p> 
              <img src={`http://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`} alt="Weather Condition" />  */}
            </div>
          </div>
          <div className='border-2 border-rose-500 rounded-md p-4'>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>Top News</p>
              <div>{React.createElement(HiNewspaper, { size: "20" })}</div>
            </div>
            <h2 className='mb-2 font-semi'>{newsFeed && newsFeed[0]?.author}</h2>
            <div className='flex'>
              <p className='font-thin'>{newsFeed && newsFeed[0]?.title}</p>
            </div>
          </div>
          <div className='border-2 border-rose-500 rounded-md p-4'>
            <div className='flex justify-between mb-4'>
              <p className='font-bold'>{matchData.matchDescription}</p>
              <div>{React.createElement(FaUser, { size: "20" })}</div>
            </div>
            <h2 className='mb-2 font-semi'>{matchData.status}</h2>
            <div className='flex'>
              <p className='font-thin'>{matchData.team1?.shortName} VS {matchData.team2?.shortName}</p>
            </div>
          </div>
        </div>
        <div className='pa-24 bg-yellow-300 basis-3/5'>hello</div>
      </div>
    </div>
  )
}

export default Home