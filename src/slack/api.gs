function _api(resource, method, params) {
  params = typeof params !== 'undefined' ? params : {};

  var properties = PropertiesService.getScriptProperties().getProperties();
  var url = 'https://'+properties.workspace+'.slack.com/api/'+resource;

  if (method == 'get') {
    params.token = properties.accessToken;
    var queryString = Object.keys(params).map(function(k) {
      return encodeURIComponent(k)+'='+encodeURIComponent(params[k]);
    });
    return UrlFetchApp.fetch(url+'?'+queryString);
  } else {
    // NOTE: 必要になったら作る
    return null;
  }
}
