import winston from 'winston';
import path from 'path';

const logger = winston.createLogger({

  format: winston.format.combine(
    winston.format.errors({stack: true}), 
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
  new winston.transports.File({ 
    filename: path.resolve('src', 'infra', 'logs', 'error.log'),
    level: 'error',
  }),
  new winston.transports.File({ 
    filename: path.resolve('src', 'infra', 'logs', 'info.log'),
    level: 'info', 
  }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
  format: winston.format.simple(),
  }));
}

export default logger;