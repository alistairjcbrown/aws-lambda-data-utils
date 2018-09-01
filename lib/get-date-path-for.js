const pad = value => `0${value}`.slice(-2);

const getDatePathFor = date =>
  `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}`;

module.exports = getDatePathFor;
