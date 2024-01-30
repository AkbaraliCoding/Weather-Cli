import getArgs from './helpers/args.js'
import { getIcons, getWeather } from './sevices/api.services.js';
import { printErr, printSucc, printHelp, printWeather } from './sevices/log.services.js';
import { TOKEN_DIC, getKeyValue, saveKeyValue } from './sevices/storage.services.js';

const saveToken = async token =>{
    if (!token.length) {
        printErr('token Kiritilmadi Mol')
        return false
    }
    try {
        await saveKeyValue(TOKEN_DIC.token, token)
        printSucc('Token was saqlandi')
    } catch (error) {
        printErr(error.message)
    }
}

const saveCity = async city =>{
    if (!city.length) {
        printErr('city Kiritilmadi Mol')
        return false
    }
    try {
        await saveKeyValue(TOKEN_DIC.city, city)
        printSucc('city was saqlandi')
    } catch (error) {
        printErr(error.message)
    }
}
const getForcast = async () =>{
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DIC.city) 
        const response = await getWeather(city)
        printWeather(response.data)
        // console.log(response.data);
    } catch (error) {   
        if (error?.response?.status == 404) {
            printErr('Shahar topilmadi, boshqa shahar yoz')
        }else if(error?.response?.status == 401){
            printErr('Token topilmadi, token top')
        }else{
            printErr(error.message);
        }
    }

}
const startCli = () =>{
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        return saveCity(args.s)
    }if (args.t) {
        return saveToken(args.t)
    }
    getForcast()
}

startCli()