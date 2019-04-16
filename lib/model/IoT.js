const Tenant = require('./Tenant');
const Gateway = require('./Gateway');
const Device = require('./Device');
const Sensor = require('./Sensor');
const SensorType = require('./SensorType');
const Capability = require('./Capability');
const Measure = require('./Measure');

class IoT {

    get tenants() {
        return {
            url: `/tenants`,
            type: Tenant
        }
    }

    get tenant() {
        this.url = `/tenant`;
        this.type = Tenant;
        this.prefix = `:tenantId`;
        return this;
    }

    get gateways() {
        this.url += `/${this.prefix}/gateways`;
        this.type = Gateway;
        this.prefix = `:gatewayId`;
        return this;
    }

    get devices() {
        this.url += `/${this.prefix}/devices`;
        this.type = Device;
        this.prefix = `:deviceId`;
        return this;
    }

    get sensors() {
        this.url += `/${this.prefix}/sensors`;
        this.type = Sensor;
        return this;
    }

    get sensorTypes() {
        this.url += `/${this.prefix}/sensorTypes`;
        this.type = SensorType;
        this.prefix = `:sensorTypeId`;
        return this;
    }

    get capabilities() {
        this.url += `/${this.prefix}/capabilities`;
        this.type = Capability;
        this.prefix = `:capabilityId`;
        return this;
    }

    get measures() {
        if (this.prefix !== ":deviceId" && this.prefix !== ":tenantId") {
            throw new Error("Can be chained to device OR tenant only")
        }
        if (this.prefix === ":deviceId") {
            this.url += `/${this.prefix}/measures`;
            this.type = Measure;
            this.prefix = `measure`;
        } else if(this.prefix === ":tenantId"){
            this.url += `/${this.prefix}/measures/capabilities/:capabilityId?filter=sensorId eq ':sensorId'`;
            this.type = Measure;
            this.prefix = `measure`;
        }
        return this;
    }

    get authClientCertificate() {
        if (this.prefix !== ":deviceId") {
            throw new Error("Can be chained to device only")
        }
        this.url += `/${this.prefix}/authentications/clientCertificate`;
        this.type = Object;
        this.prefix = `authClientCertificate`;
        return this;
    }

    get pem() {
        if (this.prefix !== "authClientCertificate") {
            throw new Error("Can be chained to authClientCertificate only")
        }
        this.url += `/pem`;
        this.type = Object;
        this.prefix = `pem`;
        return this;
    }


}

module.exports = IoT;