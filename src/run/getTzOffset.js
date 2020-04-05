// import { roundToNearestMinutes, differenceInMinutes, parse, addMinutes, parseISO } from 'date-fns';
// import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

import {getTimezone} from 'countries-and-timezones';
// const ct = require('countries-and-timezones');
const centralAmericanTimeZone = 'America/Chicago';
// const centralEuropeanTimeZone = 'Europe/Paris';
const australianTimeZone = 'Australia/Melbourne';

const aus = getTimezone(australianTimeZone);
console.log('Aus: ', aus);

const raglebu = ["fdfd", "dfdfdf", "roio"];
const roio = "roio";
const oior = "oior";

function checkRoio (item) {return item === "roio"};
function checkOior (item) {return item === "oior"};

const roioIndex = raglebu.findIndex(checkRoio);
const oiorIndex = raglebu.findIndex(checkOior);

console.log('roio index: ', roioIndex);
console.log('oior index: ', oiorIndex);


// const getTzOffset = (timezone) => {
//   const date = new Date();
//   const utcDateTime = zonedTimeToUtc(date, currentTimeZone);
//   const newZoneDateTime = utcToZonedTime(utcDateTime, timezone);
//   const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   const utcYear = date.getUTCFullYear();
//   const utcMonth = date.getUTCMonth();
//   const utcDate = date.getUTCDate();
//   const utcHours = date.getUTCHours();
//   const utcMinutes = date.getUTCMinutes();
//   const utcSeconds = date.getUTCSeconds();
//   console.log(utcYear, utcMonth, utcDate, utcHours, utcMinutes, utcSeconds);

//   const diff = differenceInMinutes(new Date(utcYear, utcMonth, utcDate, utcHours, utcMinutes, utcSeconds), newZoneDateTime);
//   console.log('Diff: ', diff);
// }

// const get0 = (timezone) => {
//   const today = new Date();

// }

// getTzOffset(centralAmericanTimeZone);
// getTzOffset(australianTimeZone);
// getTzOffset(centralEuropeanTimeZone);a

