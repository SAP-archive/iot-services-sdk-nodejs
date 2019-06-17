const IoTMQTTWrapper = require('./gateway/IoTMQTTWrapper');

/**
 * Returns an instance of a gateway adapter to call </br>
 * connect(), send() and disconnect() operations.
 *
 * @param type
 * @param deviceId
 * @param deviceCertificate
 * @returns {IoTMQTTWrapper}
 */
function getInstance(type, deviceId, deviceCertificate) {

    switch (type) {
        case "MQTT" :
            return IoTMQTTWrapper.getInstance({
                deviceAlternateId: deviceId,
                deviceCert: deviceCertificate
            });
    }

}

module.exports.gateway = getInstance;