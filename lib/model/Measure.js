class Measure {

    constructor({sensorId, timestamp, measure}){
        this.sensorId = sensorId;
        this.timestamp = timestamp;
        this.measure = measure;
    }
}

module.exports = Measure;