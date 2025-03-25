const permissions = {
  createAdmin: "CREATE_ADMIN",
  createTeacher: "CREATE_TEACHER",
  createStudent: "CREATE_STUDENT",
  viewSchedule: "VIEW_SCHEDULE",
  viewTeachersSchedule: "VIEW_TEACHERS_SCHEDULE",
  viewMaterial: "VIEW_MATERIAL",
  removeTeacher: "REMOVE_TEACHER",
  removeAdmin: "REMOVE_ADMIN",
};

const rolePermissions = {
  owner: [
    permissions.createAdmin,
    permissions.createTeacher,
    permissions.createStudent,
    permissions.viewSchedule,
    permissions.viewTeachersSchedule,
    permissions.viewMaterial,
    permissions.removeTeacher,
    permissions.removeAdmin,
  ],
  admin: [
    permissions.createTeacher,
    permissions.createStudent,
    permissions.viewSchedule,
    permissions.viewTeachersSchedule,
    permissions.viewMaterial,
    permissions.removeTeacher,
  ],
  teacher: [permissions.viewSchedule, permissions.viewMaterial],
  student: [permissions.viewMaterial],
  default: [],
};

const hasPermission = (user, permission) => {
  if (!user || !user.role) return false;
  return rolePermissions[user.role]?.includes(permission) || false;
};

const authorize = (permission) => async (req, res, next) => {
  if (!req.user?._id) {
    return res.status(401).json({ errorMessage: "User not verified" });
  }
  try {
    if (hasPermission(req.user, permission)) {
      next();
    } else {
      res.status(403).json({ errorMessage: "Insufficient permissions" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ errorMessage: "Internal Server Error" });
  }
};

module.exports = {
  permissions,
  authorize,
  hasPermission,
};
