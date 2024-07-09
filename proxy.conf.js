const PROXY_CONFIG = [
  {
    "/api": {
       "target": "https://acsportifolio-backend.onrender.com/",
       "secure": false,
       "logLevel": "debug",
       "changeOrigin": true
    }
  }
];

module.exports = PROXY_CONFIG;
