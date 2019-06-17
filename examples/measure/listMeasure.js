const IoTMeasureService = require('../../lib/IoTMeasureService');
const Measure = require('../../lib/model/Measure');

IoTMeasureService
    .listMeasures({deviceId: "0e4fe3e1-bf8b-44d7-8e6e-6f8184e9c06f"})
    .then(measures => {
        console.log(measures);
    });
