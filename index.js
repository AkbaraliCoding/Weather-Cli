import getArgs from './helpers/args.js'
import { printErr, printSucc } from './sevices/log.services.js';

const startCli = () =>{
    const args = getArgs(process.argv)
    console.log(args);
    printErr('error karocci')
    printSucc('otta zor karocci')
    if (args.h) {
        console.log("help Center");
        //help Center
    }
    if (args.s) {
        // save sity
    }if (args.t) {
        // save token
    }
}

startCli()