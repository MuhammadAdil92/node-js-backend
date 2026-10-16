export const REGEX = {
  PASSWORD_REGEX:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
  MONOGO_OBJECT_ID_REGEX: /^[0-9a-fA-F]{24}$/,
};

export const SALT_ROUNDS = 10;
