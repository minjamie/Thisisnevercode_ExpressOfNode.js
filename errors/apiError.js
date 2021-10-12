class apiError {
  constructor(code, msg) {
    (this.code = code), (this.msg = msg);
  }

  static badRequest(msg) {
    return new apiError(400, msg);
  }

  static internal(msg) {
    return new apiError(500, msg);
  }
}

module.exports = apiError;
