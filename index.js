import getArgs from './helpers/args.js'
import { printErr, printSucc, printHelp } from './sevices/log.services.js';
import { saveKeyValue } from './sevices/storage.services.js';

const startCli = () =>{
    const args = getArgs(process.argv)
    console.log(args);
    if (args.h) {
        //help Center
        printHelp()
    }
    if (args.s) {
        // save sity
    }if (args.t) {
        saveKeyValue("token", args.t)
        // save token
    }
}

startCli()