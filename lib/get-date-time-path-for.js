const pad = value => `0${value}`.slice(-2);

const getDateTimePathFor = date =>
  `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}/` +
  `${pad(date.getHours())}/${pad(date.getMinutes())}`;

module.exports = getDateTimePathFor;
