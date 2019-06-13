# Node.JS library for SAP IoT Services
This library helps to call public APIs of SAP IoT Services and to easily integrate IoT apps working with Node.JS to SAP Cloud service.

## Requirements

An instance of SAP IoT Services (Cloud Foundry) to use this SDK. 
Find more information about SAP IoT Service product [here](https://cloudplatform.sap.com/capabilities/product-info.SAP-Cloud-Platform-Internet-of-Things.48b79cfa-3d49-4a42-9249-e589696691ae.html). To enable SAP IoT Service in your account follow this [help page](https://help.sap.com/viewer/c48328a1bee749da9902d52f080dba0d/Cloud/en-US). 

## Download and Installation

To install Node.JS package for a project,
```$ npm install iot-services-sdk --save```
<br></br>
To import Node.JS package in your project add following dependencies in your ```package.json```,
```
"dependencies": {
   ...
   "iot-services-sdk": "^latest",
   ...
 },
```

## Configuration
- Rename ```.env.template``` to ```.env``` and change values respectively for IoT Tenant and Credentials.
- For more information, see [dotenv](https://www.npmjs.com/package/dotenv) NPM configuration.

## Services
**Service Name** | **Description** | **Example Link**
----------------- | ----------- | ----------
```IoTDeviceService``` | is for IoT Device Management API (All CRUD operations and device certificate management) | [Example](#iotapiservice-example)
```IoTMeasureService``` | to read measurements (data-points) of a device | [Example](#iotmeasureservice-example)
```IoTGatewayService``` | to connect and send measurements (data-points) for a device (Currently, only Cloud MQTT Gateway is supported) | [Example](#iotgatewayservice-example)

## Features
* Create, List, Update of following SAP IoT Services elements
  * [Capability, SensorType, Sensor, Device, Gateway, Tenant]
* List certificates for a device
* Download a new certificate for a device
* Revoke a certificate for a device
* List all data-points (measurements) sent from a device
* Push data-point (measurement) for a device using device certificate

## Example ##
#### IoTAPIService Example ####
- First include a serviceObject (e.g. IoTDeviceService) and a dataModelObject (e.g. IoT)
```javascript
const iotService = new IoTDeviceService();
const iot = new IoT();
```
- To list all objects of an element, (e.g. SensorTypes)
```javascript
const tenantId = "Put tenant ID here";    // This is not required if tenant ID is specified in .env file

iotService.list(iot.tenant.sensorTypes, {tenantId: tenantId})
    .then(sensorTypes => {
        // work with array of sensorTypes objects
    })
    .catch(error => {
        // If API threw error
    });
```

- To create an element, (e.g. Capability with single property)
```javascript
const p1 = new Property({name: "tempProp1", dataType: "integer", unitOfMeasure: "c"});
const capability = new Capability({
    name: "testCapability1",
    alternateId: "testCapability1",
    properties: [p1]
});

return iotService.create(iot.tenant.capabilities, {tenantId: tenanId}, capability)
    .then(response => {
        // Capability Created
    })
    .catch(error => {
        // If API threw error
    });
```
- To delete an element use ```iotService.delete()```
- To download device certificate
```javascript
const deviceId = "device uuid";
// list PEM is actually generating a new certificate.
iotService.list(iot.tenant.devices.authClientCertificate.pem, {
      tenantId: tenantId,   // Can be ommited
      deviceId: deviceId    // Must specify
    })
    .then(clientCertPem => {
        return clientCertPem.saveJson(deviceId + ".json");
    })
    // chain .then .catch if you wish
```


#### IoTMeasureService Example ####
```javascript
IoTMeasureService
    .listMeasures({deviceId: "0e4fe3e1-bf8b-44d7-8e6e-6f8184e9c06f"})
    .then(measures => {
        // Work with array of Measurement objects
    });
```

#### IoTGatewayService Example ####
```javascript
const gateway = IoTGatewayService.gateway("MQTT", deviceAltId, clientCert);
gateway.connect()
    .then(gateway => {
        return gateway.send(MESSAGE);
    })
    .then(() => {
        // Work after sending message
    })
    .finally(() => {
        gateway.disconnect();
    })
```

## TODO / Future Scopes
- Allow custom observer when message gets acknowledged by MQTT broker
- Create all required elements from YAML file.
- Gateway Bundle Management APIs

## How to obtain support

Please create issue at [issues](issues) to get support or report bug.

## License

Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
