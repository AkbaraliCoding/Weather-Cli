const getArgs = require("./helpers/args")

const startCli = () =>{
    const args = getArgs(process.argv)
    console.log(args);
    if (args.h) {
        //help
    }
    if (args.s) {
        // save sity
    }if (args.t) {
        // save token
    }
}

startCli()