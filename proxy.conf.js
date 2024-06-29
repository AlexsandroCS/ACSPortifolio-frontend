const PROXY_CONFIG = [
  {
    "/api": {
       "target": "http://3.236.41.165:32769/",
       "secure": false,
       "logLevel": "debug",
       "changeOrigin": true
    }
  }
];

module.exports = PROXY_CONFIG;
