const { QuickLogger } = require('../main')

const logger = new QuickLogger()
// Or if you want a specific name use:
// const logger = new QuickLogger({
//    name: "Logger"
// })

logger.log("Hello, World!") // output: [Logger] => Hello, World!
logger.warn("This a Warn") // output: [Logger WARN] => This a Warn
logger.error("This a Error") // [Logger ERROR] => This a Error
logger.debug("This a Debug") // [Logger DEBUG] => This a Debug