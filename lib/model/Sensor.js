class Sensor {

    constructor({id, alternateId, deviceId, name, sensorTypeId}) {
        this.id = id;
        this.name = name;
        this.alternateId = alternateId;
        this.deviceId = deviceId;
        this.sensorTypeId = sensorTypeId;
    }

}

module.exports = Sensor;