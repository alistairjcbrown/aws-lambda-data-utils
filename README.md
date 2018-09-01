# aws-lambda-data-utils

Common data utils for pulling and pushing data in AWS lambdas

## Dependencies

These tools use only node native modules, and the `aws-sdk` which is
pre-installed on AWS lambda.


## Common Functions

### create-hash

Uses the node `crypto` library to creaate a SHA-256 hash of a value. Useful for
adding to file names to check for duplicate content.

```js
const { createHash } = require("aws-lambda-data-utils");
createHash('hello world'); // b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

### get-date-path-for

Creates string path of year / month / day, with prefixed `0`, for the provided
date.

```js
const { getDatePathFor } = require("aws-lambda-data-utils");
getDatePathFor(new Date('2017-06-03')); // 2017/06/03
```

### get-date-time-path-for

Creates string path of year / month / day / hour / minute, with prefixed `0`,
for the provided date.

```js
const { getDateTimePathFor } = require("aws-lambda-data-utils");
getDateTimePathFor(new Date('2017-06-03T15:05')); // 2017/06/03/15/05
```

### get-from-s3

Gets a file from a specific S3 bucket. Takes bucket name and file path.

```js
const { getFromS3 } = require("aws-lambda-data-utils");
getFromS3('my-bucket', '2017/06/03/my-data.json'); // returns promise
```

### get-from-web

Get data from a remote HTTPS URL (__Note:__ only works with HTTPS!)

```js
const { getFromWeb } = require("aws-lambda-data-utils");
getFromWeb('https://www.example.com/2017/06/03/my-data.json'); // returns promise
```

### get-list-from-s3

Gets a list of files present in a directory of a specific S3 bucket. Takes care
of paginating through the list and returning a complete file list if there are
more than 1000 files. Takes bucket name and file path.

```js
const { getListFromS3 } = require("aws-lambda-data-utils");
getListFromS3('my-bucket', '2017/06/03/'); // returns promise
```

### set-in-s3

Writes a file to S3. Takes searchable prefix, bucket name, file path and file
contents.

```js
const { setInS3 } = require("aws-lambda-data-utils");
setInS3('2017/06/03/', 'my-bucket', '2017/06/03/my-data.json', '{"hello":"world"}'); // returns promise
```
