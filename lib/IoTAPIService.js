require('dotenv').config();
const request = require('request-promise-native');
const Tenant = require('./model/Tenant');

class IoTAPIService {

    constructor(baseTenant, landscape, hostName, clientId, clientSecret) {
        this.baseTenant = baseTenant || process.env.SAP_IOT_BASE_TENANT;
        this.landscape = landscape || process.env.SAP_IOT_LANDSCAPE;
        this.hostName = hostName || process.env.SAP_IOT_HOST || "cp.iot.sap";
        this.clientId = clientId || process.env.SAP_IOT_CLIENT_ID;
        this.clientSecret = clientSecret || process.env.SAP_IOT_CLIENT_SECRET;
        this._baseUrl = `https://${this.baseTenant}.${this.landscape}.${this.hostName}/${this.baseTenant}/iot/core/api/v1`;
        this._authToken = new Buffer.from(this.clientId + ":" + this.clientSecret).toString("base64");

    }


    list(model, pathParam) {

        if(typeof model.type !== "function" || typeof model.url !== "string"){
            throw new Error("Invalid Parameter");
        }

        let Type = model.type;
        let url = this.replacePathParams(model.url, pathParam);

        if(pathParam && pathParam.id){
            url += `/${pathParam.id}`
        }

        let options = {
            uri: this._baseUrl + url,
            headers: {
                "Authorization": `Basic ${this._authToken}`
            },
            json: true,
            transform: function (body, response, error) {
                if (!error) {
                    if (body.constructor === Array) {
                        return body.map((b) => new Type(b));
                    } else if(typeof body === "object"){
                        return new Type(body);
                    } else {
                        return new Error("JSON Response is neither Array not Object");
                    }
                }
                return error;
            }
        };

        return request(options);
    }

    create(model, pathParam, object){
        if(typeof model.type !== "function" || typeof model.url !== "string"){
            throw new Error("Invalid Parameter");
        }

        let Type = model.type;
        let url = this.replacePathParams(model.url, pathParam);

        if(pathParam && pathParam.id){
            url += `/${pathParam.id}`
        }


        let options = {
            method: 'POST',
            uri: this._baseUrl + url,
            headers: {
                "Authorization": `Basic ${this._authToken}`
            },
            body: object,
            json: true
        };

        return request(options);
    }

    delete(model, pathParam){
        if(typeof model.type !== "function" || typeof model.url !== "string"
            || typeof pathParam === "undefined" || typeof pathParam.id === "undefined"){
            throw new Error("Invalid Parameter");
        }

        let Type = model.type;
        let url = this.replacePathParams(model.url, pathParam);

        if(pathParam && pathParam.id){
            url += `/${pathParam.id}`
        }

        let options = {
            method: 'DELETE',
            uri: this._baseUrl + url,
            headers: {
                "Authorization": `Basic ${this._authToken}`
            },
            json: true
        };

        return request(options);
    }

    replacePathParams(url, pathParam) {
        let newUrl = url;
        if(url.includes(":")){
            newUrl = url.replace(/:([A-Za-z]*)/g, function(match, p1){
                return pathParam[p1];
            });
        }
        return newUrl;
    }

}

module.exports = IoTAPIService;