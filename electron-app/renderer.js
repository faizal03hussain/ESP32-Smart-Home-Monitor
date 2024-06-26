const client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "clientId");

client.onMessageArrived = (message) => {
  const data = message.payloadString.split(',');
  const temperature = data[0].split(':')[1];
  const humidity = data[1].split(':')[1];

  document.getElementById('temperature').innerText = temperature;
  document.getElementById('humidity').innerText = humidity;

  window.electron.sendData({ temperature: parseFloat(temperature), humidity: parseFloat(humidity) });
};

client.connect({ onSuccess: () => {
  client.subscribe("home/esp32");
} });
