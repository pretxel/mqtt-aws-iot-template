var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
  keyPath: "<YourPrivateKeyPath>", //path of the private key file associated with the client certificate
  certPath: "<YourCertificatePath>", //path of the client certificate file
  caPath: "<YourRootCACertificatePath>", //path of your CA certificate file
  clientId: "<YourUniqueClientIdentifier>", //the client ID you will use to connect to AWS IoT
  host: "<YourCustomEndpoint>" //the AWS IoT endpoint you will use to connect
});


device.on('connect', function () {
  console.log('connect');
  device.subscribe('stats');
  device.subscribe('config');
  //device.publish('laps', JSON.stringify({  }));
  //device.publish('trap', JSON.stringify({  }));
});

device.on('message', function (topic, payload) {
  console.log('message', topic, payload.toString());
});
