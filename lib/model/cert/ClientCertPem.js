const fs = require('fs');

class ClientCertPem {

    constructor(rawJson) {
        this._type = 'clientCertificate';
        this._secret = rawJson.secret;
        this._pem = rawJson.pem;
        // This is just to store on filesystem in case of later retrieval
        this._rawJson = rawJson;
    }

    get secret() {
        return this._secret;
    }

    get pem() {
        return this._pem;
    }

    get type() {
        return this._type;
    }

    savePem(filePath, errorCallback) {
        fs.writeFile(filePath, this._pem, (error) => {
            if (error)
                errorCallback();
        });
    }

    saveJson(filePath, errorCallback) {
        fs.writeFile(filePath, JSON.stringify(this), (error) => {
            if (error)
                errorCallback();
        });
    }

    static loadFrom(filePath, callback) {
        fs.readFile(filePath, (error, data) => {
            if (error)
                return callback(error, null);
            const rawJson = JSON.parse(data.toString());
            const clientCert = new ClientCertPem(rawJson);
            callback(null, clientCert);
        })
    }

    toJSON() {
        return this._rawJson;
    }

}

module.exports = ClientCertPem;