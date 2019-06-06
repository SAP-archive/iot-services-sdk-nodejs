const Gateway = require('./Gateway');
const Device = require('./Device');
const Sensor = require('./Sensor');
const SensorType = require('./SensorType');
const Capability = require('./Capability');

class Tenant {

    constructor({id: id, name: name}) {
        this.tenantId = id;
        this.name = name;
    }

}

module.exports = Tenant;