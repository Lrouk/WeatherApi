import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City} from './WeatherStyle'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=tel aviv&units=metric&appid=4c4756c7713b338c8f850f45b8a0ee11'

const Weather = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error)=> {
            console.log(error)
        })
    },[])

    console.log(data)


    if(!data)
    return null;


  return (
    <WeatherContainer>
        <Temp> {data.main.temp.toFixed(0)}&#176;</Temp>
           <City>Tel Aviv, Israel</City>
    </WeatherContainer>
  )
}

export default Weather