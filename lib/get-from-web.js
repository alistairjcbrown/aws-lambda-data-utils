const https = require("https");

const getFromWeb = function(url) {
  return new Promise(function(resolve, reject) {
    https
      .get(url, response => {
        let data = "";

        response.on("data", chunk => {
          data += chunk;
        });

        response.on("end", () => {
          resolve(data);
        });
      })
      .on("error", err => {
        reject(err);
      });
  });
};

module.exports = getFromWeb;
