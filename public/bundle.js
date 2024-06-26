/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./electron-app/renderer.js":
/*!**********************************!*\
  !*** ./electron-app/renderer.js ***!
  \**********************************/
/***/ (() => {

eval("const client = new Paho.MQTT.Client(\"broker.hivemq.com\", Number(8000), \"clientId\");\r\n\r\nclient.onMessageArrived = (message) => {\r\n  const data = message.payloadString.split(',');\r\n  const temperature = data[0].split(':')[1];\r\n  const humidity = data[1].split(':')[1];\r\n\r\n  document.getElementById('temperature').innerText = temperature;\r\n  document.getElementById('humidity').innerText = humidity;\r\n\r\n  window.electron.sendData({ temperature: parseFloat(temperature), humidity: parseFloat(humidity) });\r\n};\r\n\r\nclient.connect({ onSuccess: () => {\r\n  client.subscribe(\"home/esp32\");\r\n} });\r\n\n\n//# sourceURL=webpack://esp32-smart-home-monitor/./electron-app/renderer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./electron-app/renderer.js"]();
/******/ 	
/******/ })()
;