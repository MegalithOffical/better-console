var clc = require("cli-color");
var chalk = require("chalk")

class QuickLogger {
    constructor(options) {
         this.name = options.name || "QuickLogger";  
         this.driver = options.driver || "chalk";      
    }

    log(message) {
        if(this.driver.toLowerCase() === "chalk") {
            return console.log(chalk.white(`[${this.name}] => ${message}`))
        } else if(this.driver.toLowerCase() === "cli-color") {
            return console.log(clc.bgWhiteBright(`[${this.name}] => ${message}`))
        }
    }

    error(message) {
        if(this.driver.toLowerCase() === "chalk") {
         return console.error(chalk.red(`[${this.name} ERROR] => ${message}`))   
        } else if(this.driver.toLowerCase() === "cli-color") {
         return console.error(clc.bgRedBright(`[${this.name} ERROR] => ${message}`))   
        }
    }

    warn(message) {
        if(this.driver.toLowerCase() === "chalk") {
            return console.warn(chalk.yellow(`[${this.name} WARNING] => ${message}`))  
        } else if(this.driver.toLowerCase() === "cli-color") {
          return console.warn(clc.bgRedBright(`[${this.name} WARN] => ${message}`))  
        }
    }

    debug(message) {
        if(this.driver.toLowerCase() === "chalk") {
        return console.debug(chalk.yellow(`[${this.name} DEBUG] => ${message}`))
        } else if(this.driver.toLowerCase() === "cli-color") {
         return console.debug(clc.bgYellow(`[${this.name} DEBUG] => ${message}`))   
        }
        
    }

}

module.exports = QuickLogger;