let jsonMode = false;

export const logger = {
  configure(json: boolean) {
    jsonMode = json;
  },

  info(message: string | object) {
    log('info', message);
  },

  error(message: string | object) {
    log('error', message);
  }
};

function log(level: string, message: any) {
  if (jsonMode) {
    console.log(JSON.stringify({
      level,
      timestamp: new Date().toISOString(),
      message
    }));
  } else {
    console.log(`[${level.toUpperCase()}]`, message);
  }
}