class Device {

    constructor({id, alternateId, gatewayId, name, online}) {
        this.id = id;
        this.name = name;
        this.alternateId = alternateId;
        this.gatewayId = gatewayId;
        this.online = online;
    }

}

module.exports = Device;