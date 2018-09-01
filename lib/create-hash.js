const crypto = require("crypto");

const createHash = value =>
  crypto
    .createHash("sha256")
    .update(value, "utf8")
    .digest("hex");

module.exports = createHash;
