
const chalk = require("chalk");

class Logging {

  error(message) {
    // temporary placeholder
    console.log(chalk.bgRed.bold.yellow(message));
  }
  
  bigWarning(message) {
    console.log(chalk.bgYellow.red.bold.underline(message));
  }

  warning(message) {
    console.log(chalk.yellow.bold(message));
  }

  log(message) {
    // Temporary placeholder
    console.log(chalk.green(message));
  }

}

module.exports = Logging;