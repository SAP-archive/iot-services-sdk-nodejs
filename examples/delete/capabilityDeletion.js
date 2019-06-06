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

iotService.delete(iot.tenant.capabilities, {
    tenantId: 885993624,
    id: "949deef9-ea19-4e84-8cc0-c28adab506e3"
})
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error.message);
    });
