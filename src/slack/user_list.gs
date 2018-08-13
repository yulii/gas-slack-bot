function _getUserList() {
  var response = JSON.parse(_api('users.list', 'get'));
  return users = response.members;
}

function _filterOwnerUserList(users) {
  return users.filter(function(user) {
    return user.is_owner && !users.deleted
  });
}

function _filterAdminUserList(users) {
  return users.filter(function(user) {
    return user.is_admin && !user.is_owner && !users.deleted
  });
}

function _viewUserList(users) {
  var len = users.length;

  var results = '';
  for (var i = 0; i < len; i++) {
    results += _viewUser(users[i])+'\n';
  }
  return results;
}
