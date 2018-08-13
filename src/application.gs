function run() {
  var data = {
    'icon_emoji': ':whale:',
    'text': 'GAS テストスクリプト'
  };

  postMessage(data);
}

function describePrivilegedUser() {
  var users = _getUserList();

  var owners = _filterOwnerUserList(users);
  var admins = _filterAdminUserList(users);

  var text = '';

  text += ':slack: *Owner Accounts ('+owners.length+')*\n';
  text += _viewUserList(owners);

  text += ':slack: *Admin Accounts ('+admins.length+')*\n';
  text += _viewUserList(admins);

  var data = {
    'text': text,
    'mrkdwn': true
  };

  postMessage(data);
}
