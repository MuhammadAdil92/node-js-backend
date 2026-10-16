export enum StatusCode {
  //  Success
  OK = 200, // Request succeeded
  CREATED = 201, // Resource created successfully
  ACCEPTED = 202, // Request accepted but not yet processed
  NO_CONTENT = 204, // Request succeeded but no content to return

  //  Client Errors
  BAD_REQUEST = 400, // Malformed request or validation error
  UNAUTHORIZED = 401, // Authentication required or failed
  PAYMENT_REQUIRED = 402, // Reserved for future use (e.g., payment systems)
  FORBIDDEN = 403, // Authenticated but not authorized
  NOT_FOUND = 404, // Resource not found
  METHOD_NOT_ALLOWED = 405, // HTTP method not allowed
  NOT_ACCEPTABLE = 406, // Cannot produce acceptable response
  CONFLICT = 409, // Conflict with current resource state
  GONE = 410, // Resource permanently removed
  UNSUPPORTED_MEDIA_TYPE = 415, // Media type not supported

  // Authentication/Validation Related
  UNPROCESSABLE_ENTITY = 422, // Validation failed (commonly used with form inputs)
  TOO_MANY_REQUESTS = 429, // Rate limiting

  // Server Errors
  INTERNAL_SERVER_ERROR = 500, // Generic server error
  NOT_IMPLEMENTED = 501, // Functionality not implemented
  BAD_GATEWAY = 502, // Invalid response from upstream server
  SERVICE_UNAVAILABLE = 503, // Server temporarily unavailable (maintenance/overload)
  GATEWAY_TIMEOUT = 504, // Timeout from upstream server

  //  Custom Application-Level Codes (if needed)
  CUSTOM_VALIDATION_FAILED = 1001, // Custom validation error
  CUSTOM_TOKEN_EXPIRED = 1002, // Custom: token expired
}
