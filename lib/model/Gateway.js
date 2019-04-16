class Gateway {

    constructor({id, alternateId, protocolId, name, type, status}) {
        this.id = id;
        this.alternateId = alternateId;
        this.protocolId = protocolId;
        this.gatewayName = name;
        this.gatewayType = type;
        this.status = status;
    }

}

module.exports = Gateway;