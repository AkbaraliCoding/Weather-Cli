import axios from 'axios'
import { TOKEN_DIC, getKeyValue } from './storage.services.js'

const getIcons = (icon) =>{
    switch (icon.slice(0, -1)) {
        case '01':
            return '*'
        case '02':
            return '⛅'
        case '03':
            return '☁️'
        case '04':
            return '🌦️'
        case '09':
            return '🌧️'  
        case '10d':
            return '🌨️'     
        case '11':
            return '💨'
        case '13':
            return '🌩️'
    }
}

const getWeather = async city =>{
    
    const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DIC.token)
    if (!token) {
        throw new Error("api doesn't exist, -t [API_KEY] for saving token")
    }

    const data = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q:city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })
    return data
}

export {getWeather, getIcons}