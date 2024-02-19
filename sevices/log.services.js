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

const printWeather = (response) =>{
    console.log(dedent `
        ${chalk.bgYellowBright('WEATHER')} City Weather: ${response.data.name}
        Temperature: ${response.data.main.temp} (Feels Like) ${response.data.main.feels_like}
        Humindity: ${response.data.main.humidity}%
        Wind Speed: ${response.data.wind.speed}
    `);
}
export {
    printErr, printSucc, printHelp, printWeather
}