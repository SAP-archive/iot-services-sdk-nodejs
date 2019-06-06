const mqtt = require('mqtt');

class IoTMQTTWrapper {

    static getInstance({baseTenant, landscape, hostName, deviceAlternateId, deviceCert}) {
        baseTenant = baseTenant || process.env.SAP_IOT_BASE_TENANT;
        landscape = landscape || process.env.SAP_IOT_LANDSCAPE;
        hostName = hostName || process.env.SAP_IOT_HOST || "cp.iot.sap";

        const mqttWrapper = new IoTMQTTWrapper();

        mqttWrapper._mqttHost = `${baseTenant}.${landscape}.${hostName}`;
        mqttWrapper._port = "8883";

        mqttWrapper._deviceCert = deviceCert;
        mqttWrapper._clientId = deviceAlternateId;

        return mqttWrapper;
    }

    connect() {
        const options = {
            port: this._port,
            host: this._mqttHost,
            key: this._deviceCert.pem,
            cert: this._deviceCert.pem,
            passphrase: this._deviceCert.secret,
            rejectUnauthorized: false,
            protocol: 'mqtts',
            clientId: this._clientId,
            clean: true,
            connectTimeout: 3 * 1000
        };

        return new Promise((resolve, reject) => {
            this._client = mqtt.connect(options);

            return this._client
            // .on("error", (error) => {
            //     reject(error);
            // })
                .on("offline", () => {
                    reject("Error connecting");
                })
                .on("message", (topic, message) => {
                    // TODO take as parameter
                    console.log(topic, message.toString());
                })
                .on("connect", () => {
                    resolve(this);
                })
                .subscribe(`ack/${this._clientId}`);
        });
    };

    disconnect() {
        return this._client.end();
    }

    send(jsonPayloadData) {
        return this._client.publish(`measures/${this._clientId}`, JSON.stringify(jsonPayloadData));
    }

}

module.exports = IoTMQTTWrapper;