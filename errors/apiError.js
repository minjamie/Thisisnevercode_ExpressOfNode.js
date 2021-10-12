class apiError {
  constructor(code, msg) {
    (this.code = code), (this.msg = msg);
  }

  static badRequest(msg) {
    return new apiError(400, msg);
  }

  static keyError(msg) {
    return new apiError(400, msg);
  }

  static notFoundError(msg) {
    return new apiError(404, msg);
  }

  static internalError(msg) {
    return new apiError(500, msg);
  }
}

module.exports = apiError;
