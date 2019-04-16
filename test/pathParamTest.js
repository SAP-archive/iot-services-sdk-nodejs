let url = "/tenants/:tenantId/sensors/:sensorId";

let pathParam = {
  tenantId: 123,
  sensorId: 234
};

if(url.includes(":")){
    const newUrl = url.replace(/:([A-Za-z]*)/g, function(match, p1, offset, string){
       return pathParam[p1];
    });
    console.log(newUrl);
}else {
    console.log("No");
}