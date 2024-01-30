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
    // ${icon}: ${response.weather[0].desciption}
    console.log(dedent `
        ${chalk.bgYellowBright('WEATHER')} City Weather: ${response.name}
        Temperature: ${response.main.temp} (Feels Like) ${response.main.feels_like}
        Humindity: ${response.main.humidity}%
        Wind Speed: ${response.wind.speed}
    `);
}
export {
    printErr, printSucc, printHelp, printWeather
}