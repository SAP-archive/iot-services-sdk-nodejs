const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();

iotService.list(iot.tenant.sensorTypes, {tenantId: 885993624})
    .then((sensorTypes) => {
        sensorTypes.forEach(sensorType => {
            console.log(sensorType)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
