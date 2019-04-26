const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');
const ClientCertPem = require('../../lib/model/cert/ClientCertPem');

const iotService = new IoTAPIService();
const iot = new IoT();
const deviceId = "0e4fe3e1-bf8b-44d7-8e6e-6f8184e9c06f";

iotService.list(iot.tenant.devices.authClientCertificate, {
    tenantId: 885993624,
    deviceId: deviceId
})
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
