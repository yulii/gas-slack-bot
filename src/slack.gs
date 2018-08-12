function postMessage(data) {
  var properties = PropertiesService.getScriptProperties().getProperties();

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify(data)
  };
  UrlFetchApp.fetch(properties.webhookUrl, options);
};
