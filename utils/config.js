const apiHost = process.env.NODE_ENV === 'production'
  ? 'http://api.production.com/'
  : 'http://localhost/';

const apiport = process.env.NODE_ENV === 'production'
  ? ''
  : '3000';

export {
  apiHost,
  apiport,
};