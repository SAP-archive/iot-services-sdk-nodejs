const CapabilityAssignment = require('./CapabilityAssignment');
const Capability = require('./Capability');

class SensorType {

    constructor({id, alternateId, name, capabilities}) {
        this.id = id;
        this.name = name;
        this.alternateId = alternateId;
        this.capabilities = capabilities ? capabilities.map((c) => new CapabilityAssignment(c)) : undefined;
    }

}

module.exports = SensorType;