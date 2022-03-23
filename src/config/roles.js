const allRoles = {
  user: ['getAllUser', 'createUser'],
  admin: ['getAllUser', 'createUser','getUserById'],
  manager: ['getUser','getUserById'],
  seniorManager: ['getAllUser'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
