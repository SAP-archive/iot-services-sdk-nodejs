const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();


iotService.list(iot.tenant.devices.authClientCertificate.pem, {tenantId: 885993624, deviceId:"0e4fe3e1-bf8b-44d7-8e6e-6f8184e9c06f"})
    .then((devices) => {
        console.log(devices)
    })
    .catch((error) => {
        console.log(error.message);
    });
