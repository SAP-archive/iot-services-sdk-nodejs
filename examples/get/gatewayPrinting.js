const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();

iotService.list(iot.tenant.gateways, {tenantId: 885993624})
    .then((gateways) => {
        gateways.forEach(gateway => {
            console.log(gateway)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
