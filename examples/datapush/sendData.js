const IoTGatewayService = require('../../lib/IoTGatewayService');
const ClientCertPem = require('../../lib/model/cert/ClientCertPem');
const IoT = require('../../lib/model/IoT');
const IoTAPIService = require('../../lib/IoTAPIService');

const iotService = new IoTAPIService();
const iot = new IoT();
const deviceId = "0e4fe3e1-bf8b-44d7-8e6e-6f8184e9c06f";
const deviceAltId = "device1";

const MESSAGE = {
    "capabilityAlternateId": "1077532090",
    "sensorAlternateId": "3a0451ad-9bd3-40dd-b1aa-1549212de6e3",
    "measures": [
        {
            "pressure": "99"
        }
    ]
};

let clientCert;
let gateway;
ClientCertPem.loadFrom(deviceId + ".json")
    .then((cert) => {
        clientCert = cert;
    })
    .catch((error) => {
        console.log(error);
        return iotService
            .list(iot.tenant.devices.authClientCertificate.pem, {
                tenantId: 885993624,
                deviceId: deviceId
            })
            .then(cert => {
                clientCert = cert;
                return cert;
            })
            .then((cert) => {
                return cert.saveJson(deviceId + ".json")
            })
    })
    .then(() => {
        gateway = IoTGatewayService.gateway("MQTT", deviceAltId, clientCert);
        return gateway;
    })
    .then((gateway) => {
        return gateway.connect();
    })
    .then(gateway => {
        return gateway.send(MESSAGE);
    })
    .catch(error => {
        console.log(error);
        return gateway.disconnect();
    })
    .finally(() => {
        if (gateway._client.connected) {
            setTimeout(() => gateway.disconnect(), 5 * 1000);
        } else {
            gateway.disconnect();
        }
    });