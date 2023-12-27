import getArgs from './helpers/args.js'
import { printErr, printSucc, printHelp } from './sevices/log.services.js';
import { saveKeyValue } from './sevices/storage.services.js';

const saveToken = async token =>{
    try {
        await saveKeyValue("Token", token)
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
}

startCli()