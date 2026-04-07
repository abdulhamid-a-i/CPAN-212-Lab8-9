import { body } from "express-validator";

export const assignRolesValidator = [
  body("roles").isArray({ min: 1 }).withMessage("roleIds must be a non-empty array")
];