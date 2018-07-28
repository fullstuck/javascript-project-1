console.log("Level 20");

let yearsToMonths = 12;
let yearsToDays = 365;
let yearsToHours = 8760;
let yearsToMinutes = 525600;
let yearsToSeconds = 31536000;

let monthsToDays = 30;
let monthsToHours = 730;
let monthsToMinutes = 43800;
let monthsToSeconds = 2628000;

let daysToHours = 24;
let daysToMinutes = 1440;
let daysToSeconds = 86400;

let hoursToMinutes = 60;
let hoursToSeconds = 3600;

let minutesToSeconds = 60;

console.log("Level 21");

let date = new Date();
console.log('Full date =', date);
console.log('Seconds =', date.getSeconds());
console.log('Minutes =', date.getMinutes());
console.log('Hours =', date.getHours());
console.log('Day =', date.getDay());
console.log('Month =', date.getMonth());
console.log('Year =', date.getFullYear());

console.log("Level 22");

const getFullTime = () => date;
const getTime = () => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
const getDate = () => `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
console.log(getFullTime());
console.log(getDate());
console.log(getTime());

console.log("Level 23");

const getDateTime = (date, time) => `${date} ${time}`;
console.log(getDateTime(getDate(), getTime()));