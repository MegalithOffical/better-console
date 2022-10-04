var clc = require("cli-color");

class QuickLogger {
    constructor(options) {
        if(options === undefined) this.name = "QuickLogger";
        else this.name = options.name;
    }

    log(message) {
        return console.log(clc.bgWhiteBright(`[${this.name}] => ${message}`))
    }

    error(message) {
        new Error(clc.bgWhiteBright(`[${this.name}] => ${message}`))
        return console.error(clc.bgRedBright(`[${this.name} ERROR] => ${message}`))
    }

    warn(message) {
        return console.warn(clc.bgRedBright(`[${this.name} WARN] => ${message}`))
    }

    debug(message) {
        return console.debug(clc.bgYellow(`[${this.name} DEBUG] => ${message}`))
    }

}

module.exports = QuickLogger;