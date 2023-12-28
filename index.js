import getArgs from './helpers/args.js'
import { getWeather } from './sevices/api.services.js';
import { printErr, printSucc, printHelp } from './sevices/log.services.js';
import { TOKEN_DIC, saveKeyValue } from './sevices/storage.services.js';

const saveToken = async token =>{
    if (!token.length) {
        printErr('token Kiritilmadi Mol')
        return false
    }
    try {
        await saveKeyValue(TOKEN_DIC.token, token)
        printSucc('Token Was Saved')
    } catch (error) {
        printErr(error.message)
    }
}

const startCli = () =>{
    const args = getArgs(process.argv)
    if (args.h) {
        //help Center
        printHelp()
    }
    if (args.s) {
        // save sity
    }if (args.t) {
        return saveToken(args.t)
        // save token
    }
    getWeather("Uzbekistan")
}

startCli()