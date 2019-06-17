const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();

iotService.list(iot.tenant.capabilities, {tenantId: 885993624})
    .then((capabilities) => {
        capabilities.forEach(capability=>{
            console.log(capability)
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
