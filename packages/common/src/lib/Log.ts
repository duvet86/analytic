const enum LogLevels {
  TRACE = "TRACE",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR"
}

class Log {
  public generateMessage(level: LogLevels, area: string, rawError: unknown) {
    const error =
      rawError instanceof Error ? rawError.stack : JSON.stringify(rawError);

    switch (level) {
      case LogLevels.TRACE:
        // eslint-disable-next-line no-console
        return console.trace(area, error);
      case LogLevels.INFO:
        // eslint-disable-next-line no-console
        return console.info(area, error);
      case LogLevels.WARN:
        // eslint-disable-next-line no-console
        return console.warn(area, error);
      case LogLevels.ERROR:
        // eslint-disable-next-line no-console
        return console.error(area, error);
    }
  }

  public trace(message: string, error: unknown) {
    return this.generateMessage(LogLevels.TRACE, message, error);
  }

  public info(message: string, error: unknown) {
    return this.generateMessage(LogLevels.INFO, message, error);
  }

  public warn(message: string, error: unknown) {
    return this.generateMessage(LogLevels.WARN, message, error);
  }

  public error(message: string, error: unknown) {
    return this.generateMessage(LogLevels.ERROR, message, error);
  }
}

export default new Log();
