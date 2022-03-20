const allRoles = {
  user: [],
  admin: ['getAllUser'],
  manager: ['getUser'],
  seniorManager: ['getAllUser']
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
