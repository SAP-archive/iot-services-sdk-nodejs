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

    savePem(filePath) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, this._pem, (error) => {
                if (error)
                    reject(error);
                resolve();
            });
        });
    }

    saveJson(filePath) {
        return new Promise((resolve, reject) => {
            fs.writeFile(filePath, JSON.stringify(this), (error) => {
                if (error)
                    reject(error);
                resolve()
            });
        });
    }

    static loadFrom(filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, (error, data) => {
                if (error)
                    return reject(error.message);
                const rawJson = JSON.parse(data.toString());
                const clientCert = new ClientCertPem(rawJson);
                resolve(clientCert);
            })
        });
    }

    toJSON() {
        return this._rawJson;
    }

}

module.exports = ClientCertPem;