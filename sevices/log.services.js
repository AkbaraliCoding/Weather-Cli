import chalk from "chalk";
import dedent from "dedent-js";
const printErr = (error) => {
    console.log(chalk.bgRed("Xato") + " " + error);
}

const printSucc = (msg) => {
    console.log(chalk.bgGreen("Go'zal") + " " + msg);
}

const printHelp = () => {
    console.log(dedent`
    ${chalk.bgYellow('HELP')}
    -s [CITY] for install City
    -h [HELP] for help
    -t [API_KEY] for saving token
    `)
}
export {
    printErr, printSucc, printHelp
}