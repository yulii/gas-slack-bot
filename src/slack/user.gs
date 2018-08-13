function _viewUser(user) {
  var result = '*'+user.profile.real_name+'*\n';
  result += '> `@'+user.name+'` / '+user.profile.email+'\n';
  return result
}

function _viewUserType(user) {
  if (user.is_primary_owner) {
    return 'Primary Owner';
  } else if (user.is_owner) {
    return 'Owner';
  } else if (user.is_admin) {
    return 'Admin';
  } else if (user.is_restricted) {
    return 'Multi-Channel Guest';
  } else if (user.is_ultra_restricted) {
    return 'Single-Channel Guest';
  } else if (user.is_bot) {
    return 'Bot';
  } else if (user.is_app_user) {
    return 'App User';
  } else {
    return 'Full Member';
  }
}
