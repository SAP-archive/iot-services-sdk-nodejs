const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();
const tenantId = "885993624";

iotService
    .list(iot.tenant.sensorTypes, {
        tenantId: tenantId
    })
    .then((sensorTypes) => {
        sensorTypes.forEach(sensorType => {
            console.log(sensorType)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
