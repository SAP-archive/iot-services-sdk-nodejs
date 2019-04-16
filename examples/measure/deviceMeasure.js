const IoTMeasureService = require('../../lib/IoTMeasureService');
const Measure = require('../../lib/model/Measure');

IoTMeasureService
    .listMeasures({deviceId: "d4f30a0c-acb7-4613-8afd-dc33f07032cf"})
    .then(measures => {

        const sum = measures
            .filter(m => m.sensorId === "9bd020c2-8820-4c01-ae31-9dabc50efb4c")
            .filter(m => "temperature" in m.measure)
            .map(m => m.measure.temperature)
            .reduce((a, b) => a + b);
        const length = measures
            .filter(m => m.sensorId === "9bd020c2-8820-4c01-ae31-9dabc50efb4c")
            .filter(m => "temperature" in m.measure)
            .map(m => m.measure.temperature).length;
        console.log("Average Temperature from last 100 readings: " + (sum/length));

    });
