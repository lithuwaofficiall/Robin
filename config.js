const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "P4wwEBZL#ZHaTlV1dPp_w85femow4BcuVBA8YfLBbs4aJKUMgDO8",
  MONGODB: process.env.MONGODB || "Enter your mongoDB public URL",
  OWNER_NUM: process.env.OWNER_NUM || "94789562234",
};
