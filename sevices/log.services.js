import chalk from "chalk";
const printErr = (error)=>{
    console.log(chalk.bgRed("Xato Uka") + " " + error);
}

const printSucc = (msg)=>{
    console.log(chalk.bgGreen("O'tta Go'zal") + " " + msg);
}

export {
    printErr, printSucc
}