/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

var host = "drupalvm.test";

module.exports = {
  // "ui": {
  //     "port": 3001
  // },
  files: ["./style.css", "./styleguide/*.html"],
  watchEvents: ["add", "change"],
  // watch: ["style.css"],
  // "ignore": [],
  // "single": false,
  // "watchOptions": {
  //     "ignoreInitial": true
  // },
  // "server": false,
  proxy: "http://" + host,
  // "port": 3000,
  // "middleware": false,
  //   serveStatic: ["style.css"],
  // "ghostMode": {
  //     "clicks": true,
  //     "scroll": true,
  //     "location": true,
  //     "forms": {
  //         "submit": true,
  //         "inputs": true,
  //         "toggles": true
  //     }
  // },
  // "logLevel": "info",
  // "logPrefix": "Browsersync",
  // "logConnections": false,
  // "logFileChanges": true,
  // "logSnippet": true,
  // "rewriteRules": [],
  open: "local",
  // "browser": "default",
  // "cors": false,
  // "xip": false,
  // "hostnameSuffix": false,
  // reloadOnRestart: true,
  // "notify": true,
  // "scrollProportionally": true,
  // "scrollThrottle": 0,
  // "scrollRestoreTechnique": "window.name",
  // "scrollElements": [],
  // "scrollElementMapping": [],
  // reloadDelay: 500,
  // reloadDebounce: 500,
  // reloadThrottle: 500,
  // "plugins": [],
  // "injectChanges": true,
  startPath: "themes/custom/styled/styleguide/",
  // "minify": true,
  host: host
  // "localOnly": false,
  // "codeSync": true,
  // "timestamps": true,
  // "clientEvents": [
  //     "scroll",
  //     "scroll:element",
  //     "input:text",
  //     "input:toggles",
  //     "form:submit",
  //     "form:reset",
  //     "click"
  // ],
  // "socket": {
  //     "socketIoOptions": {
  //         "log": false
  //     },
  //     "socketIoClientConfig": {
  //         "reconnectionAttempts": 50
  //     },
  //     "path": "/browser-sync/socket.io",
  //     "clientPath": "/browser-sync",
  //     "namespace": "/browser-sync",
  //     "clients": {
  //         "heartbeatTimeout": 5000
  //     }
  // },
  // "tagNames": {
  //     "less": "link",
  //     "scss": "link",
  //     "css": "link",
  //     "jpg": "img",
  //     "jpeg": "img",
  //     "png": "img",
  //     "svg": "img",
  //     "gif": "img",
  //     "js": "script"
  // }
};
