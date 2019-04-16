const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();

iotService.list(iot.tenant.sensors, {tenantId: 885993624})
    .then((sensors) => {
        sensors.forEach(sensor => {
            console.log(sensor)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
