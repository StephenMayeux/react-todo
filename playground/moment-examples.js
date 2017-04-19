var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1492576442;
var currentMoment = moment.unix(timestamp);
console.log('Testing', moment().unix(1492576442));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
