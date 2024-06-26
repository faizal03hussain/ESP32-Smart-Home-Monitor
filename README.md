# ESP32 Smart Home Monitor

## Project Overview
This project is a smart home monitoring system that uses an ESP32 device to collect environmental data such as temperature and humidity. The data is sent to an Electron app over MQTT, which displays the data in real-time and stores it in a local SQLite database.

## Features
- Real-time data display from ESP32 sensors.
- Historical data graphs and analysis.
- User authentication to access device data.
- Simple calibration and configuration settings for the device from the app.

## Technical Specifications
- Use of MQTT for data transfer.
- Data storage using a local SQLite database.
- Secure communication setup via preload.js and contextBridge.


## Getting Started

### ESP32
1. Open `esp32/esp32_code.ino` in the Arduino IDE.
2. Update the Wi-Fi credentials.
3. Upload the code to the ESP32.

### Electron App
1. Navigate to the `electron-app` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the Electron app.

## License
This project is licensed under the MIT License.
