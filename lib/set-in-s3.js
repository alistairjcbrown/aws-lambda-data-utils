const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const setInS3 = function(prefix, bucketName, filePath, data) {
  const params = {
    Prefix: prefix,
    Bucket: bucketName,
    Key: filePath,
    Body: data
  };

  return s3.upload(params).promise();
};

module.exports = setInS3;
