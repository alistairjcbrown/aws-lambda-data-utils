const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const getFromS3 = function(bucketName, filePath) {
  const params = {
    Bucket: bucketName,
    Key: filePath
  };

  return s3.getObject(params).promise();
};

module.exports = getFromS3;
