const apiHost = process.env.NODE_ENV === 'production'
  ? 'http://api.production.com'
  : 'http://localhost';

const apiPort = process.env.NODE_ENV === 'production'
  ? ''
  : '3000';

const apiVersion = process.env.NODE_ENV === 'production'
  ? '1.0.0/'
  : '1.0.1/';

export {
  apiHost,
  apiPort,
  apiVersion,
};