const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const getListFromS3 = function(bucketName, prefix, marker) {
  return new Promise(function(resolve, reject) {
    const params = {
      Bucket: bucketName,
      Prefix: prefix,
      Marker: marker
    };

    s3.listObjects(params, async function(err, data) {
      if (err) {
        reject(err);
        return;
      }

      if (data.IsTruncated) {
        try {
          const additionalData = await getListFromS3(
            bucketName,
            prefix,
            data.Contents[data.Contents.length - 1].Key
          );
          resolve(data.Contents.concat(additionalData));
        } catch (e) {
          reject(e);
        }
        return;
      }

      resolve(data.Contents);
    });
  });
};

module.exports = getListFromS3;
