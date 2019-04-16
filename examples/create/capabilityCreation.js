const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const Capability = require('../../lib/model/Capability');
const Property = require('../../lib/model/Property');

const iotService = new IoTAPIService();
const iot = new IoT();


const p1 = new Property({name: "tempProp1", dataType: "integer", unitOfMeasure: "c"});
const capability = new Capability({
    name: "testCapability1",
    alternateId: "testCapability1",
    properties: [p1]
});

return iotService.create(iot.tenant.capabilities, {tenantId: 885993624}, capability)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error.message);
    });
