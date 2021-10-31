const config = require("../config");
const mongoose = require("mongoose");

module.exports = async function () {
  // set locals, only providing error in development mode
  const { db_cloud: dbCloud } = config.databaseConfig;
  const { isDevelopment } = config;
  mongoose
    .connect(`${dbCloud}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      if (isDevelopment) {
        console.log("connected to mongodb");
      }
    })
    .catch((error) => {
      if (isDevelopment) {
        console.error("Error connected to mongodb:", error.reason);
      }
    });
};
