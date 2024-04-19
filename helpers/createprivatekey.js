const crypto = require("crypto")
const secret = crypto.randomBytes(32).toString("hex")
console.log(secret) // 79727ffc6b48c4b76d8252ba586bf588102333db229f21335e9ed2f2e18b2a03