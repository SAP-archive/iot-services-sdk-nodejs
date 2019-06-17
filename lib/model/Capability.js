const Property = require('./Property');

class Capability {

    constructor({id, alternateId, name, properties}) {
        this.id = id;
        this.name = name;
        this.alternateId = alternateId;
        this.properties = properties;
    }

    get getProperties() {
        return this.properties.map((p) => new Property(p));
    }

}

module.exports = Capability;