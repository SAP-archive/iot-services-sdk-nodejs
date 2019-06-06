const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();

iotService.list(iot.tenant.devices, {tenantId: 885993624})
    .then((devices) => {
        devices.forEach(device => {
            console.log(device)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
