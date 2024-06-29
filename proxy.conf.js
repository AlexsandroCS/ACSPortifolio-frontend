const PROXY_CONFIG = [
  {
    "/api": {
       "target": "http://44.223.75.61:32768/",
       "secure": false,
       "logLevel": "debug",
       "changeOrigin": true
    }
  }
];

module.exports = PROXY_CONFIG;
