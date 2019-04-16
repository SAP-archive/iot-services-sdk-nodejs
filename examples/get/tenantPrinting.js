const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();

iotService.list(iot.tenants)
    .then((tenants) => {
        tenants.forEach(tenant => {
            console.log(tenant)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
