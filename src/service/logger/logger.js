'use strict';
const {LOG_LEVEL} = require(`../config`);
const pino = require(`pino`);

const logLevel = LOG_LEVEL || `info`;
const LOGS_DEST = `./src/service/logs/${logLevel}.log`;

const logger = pino(
    {
      levelFirst: true,
      level: logLevel || `info`,
      name: `app`
    },
    LOGS_DEST
);

module.exports = {
  getLogger(options = {}) {
    return logger.child(options);
  }
};
