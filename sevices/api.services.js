import axios from 'axios'
import { TOKEN_DIC, getKeyValue } from './storage.services.js'

const getWeather = async city =>{
    
    const token = await getKeyValue(TOKEN_DIC.token)
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

    console.log(data);
}

export {getWeather}