export class AuthorizationError extends Error {
  constructor(message = "AuthorizationError") {
    super(message);
  }
}

export class NeedAuthError extends Error {
  constructor(message = "NeedAuthError") {
    super(message);
  }
}

export class BadRequestError extends Error {
  constructor(message = "BadRequestError") {
    super(message);
  }
}
