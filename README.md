# (Unofficial) Node.JS library for SAP IoT Services
This library helps to call public APIs of SAP IoT Services and to easily integrate IoT apps working with Node.JS to SAP Cloud service.

#### Technical Information
- All data models are ES6 based classes
- Whereever applicable, all APIs supports Node.JS Promise

## Services
**Service Name** | **Description** | **Example Link**
----------------- | ----------- | ----------
```IoTAPIService``` | is for IoT Device Management API (All CRUD operations and device certificate management) | [Example 1](#iotapiservice-example)
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
- First include a serviceObject (e.g. IoTAPIService) and a dataModelObject (e.g. IoT)
```javascript
const iotService = new IoTAPIService();
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

## TODO / Future Scope
- Allow custom observer when messagement gets acknolwedged by MQTT broker
- Create all required elements from YAML file.
- Gateway Bundle Management APIs
 



