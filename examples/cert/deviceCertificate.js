const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');
const ClientCertPem = require('../../lib/model/cert/ClientCertPem');

const iotService = new IoTAPIService();
const iot = new IoT();
const deviceId = "0e4fe3e1-bf8b-44d7-8e6e-6f8184e9c06f";

// list PEM is actually generating a new certificate.
iotService.list(iot.tenant.devices.authClientCertificate.pem, {
    tenantId: 885993624,
    deviceId: deviceId
})
    .then((clientCertPem) => {
        return clientCertPem.saveJson(deviceId + ".json");
    })
    .then(() => {
        return ClientCertPem.loadFrom(deviceId + ".json");
    })
    .then((clientCert) => {
        console.log(clientCert);
    })
    .catch((error) => {
        console.log(error);
    });
