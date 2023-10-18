import React, { useState } from 'react'
import Loader from './Loader'

const WeatherApp = () => {
    const [weather, setWeather] = useState({})
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(false)
    const api = {
        key: '7818b6ed8d94d8ed2347782fe125d75e',
        url: 'https://api.openweathermap.org/data/2.5/'
    }

    const searchPressed = async () => {
        console.log("clicked");
        setLoader(true);
        let data = await fetch(`${api.url}weather?q=${search}&units=metric&APPID=${api.key}`)
        let parsedData = await data.json()
        // console.log(parsedData);
        setWeather(parsedData)
        setLoader(false);
        // .then((result) => setWeather(result))
        // .catch((err) => console.log(err))
        // .then((res) => res.json())
        // .then((result) => {
        //     console.log(result);
        //     setWeather(result)
        //     // setWeather('')
        //     // console.log(weather.main.temp);
        // })
    }
    return (
        <>
            <div className='flex flex-col items-center gap-y-4 mt-10'>
                <h1 className='text-5xl font-bold text-white'>Weather App</h1>
                <div className='flex gap-x-4 p-3'>
                    <input type="text" className='px-4 rounded-xl outline-0' placeholder='Enter City Name' onChange={(e) => setSearch(e.target.value)} />
                    <button className='text-white bg-blue-600 px-4 py-2 rounded-lg' onClick={searchPressed}>Search</button>
                </div>

                {typeof weather.main !== 'undefined' ? (
                    loader === true ? (
                        <Loader />
                    ) : (
                        <div className='flex flex-col items-center'>
                            <img className='w-56' src="https://www.pngall.com/wp-content/uploads/11/Weather-PNG-Images.png" alt=''/>
                            <div className='text-white text-2xl font-semibold text-center space-y-2'>
                                <p className='text-4xl'>{weather.name}</p>
                                <p>Temperature: {weather.main.temp} °C</p>
                                <p>Cloud: {weather.weather[0].main}</p>
                                <p>Description: {weather.weather[0].description}</p>
                            </div>
                        </div>
                    )
                ) : (
                    ""
                )}


            </div>
        </>
    )
}

export default WeatherApp