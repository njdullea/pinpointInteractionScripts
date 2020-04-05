import { roundToNearestMinutes, differenceInMinutes, parse, addMinutes, parseISO } from 'date-fns';
import { format, utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

// ROUNDING TO 15 MINUTE INCREMENTS
const timeFormat = 'HH:mm';
const dateFormat = 'yyyy-MM-dd';
const dateTimeFormat = dateFormat + ' ' + timeFormat;

const time = format(roundToNearestMinutes(new Date(), { nearestTo: 15 }), timeFormat);
console.log('Time: ', time);

// CONVERTING TO AMERICAN CENTRAL TIME TO UTC TO THE OTHER CENTRAL TIME
const centralAmericanTimeZone = 'America/Chicago';
const centralEuropeanTimeZone = 'Europe/Paris';
const australianTimeZone = 'Australia/Melbourne';

const centralAmericanDateTime = new Date();
// current time zone offset 
const centralAmericanTZOffset = centralAmericanDateTime.getTimezoneOffset();
console.log('Central American time zone offset: ', centralAmericanTZOffset);
const utcDateTime = zonedTimeToUtc(centralAmericanDateTime, centralAmericanTimeZone);
// const utcDateTime = addMinutes(centralAmericanDateTime. centralAmericanTZOffset);
const centralEuropeanDateTime = utcToZonedTime(utcDateTime, centralEuropeanTimeZone);
const australianDateTime = utcToZonedTime(utcDateTime, australianTimeZone);

const printAmericanDateTime = format(centralAmericanDateTime, dateTimeFormat, {timeZone: centralAmericanTimeZone});
const printEuropeanDateTime = format(centralEuropeanDateTime, dateTimeFormat, {timeZone: centralEuropeanTimeZone});
const printAustralianDatetime = format(australianDateTime, dateTimeFormat, {timeZone: australianTimeZone});

console.log('Time American: ', printAmericanDateTime);
console.log('Time European: ', printEuropeanDateTime);
console.log('Time Australian: ', printAustralianDatetime);

const americanUtcDiff = differenceInMinutes(centralAmericanDateTime, utcDateTime);
console.log('American UTC Diff: ', americanUtcDiff);

const americanEuropeanDiff = differenceInMinutes(centralAmericanDateTime, centralEuropeanDateTime);
console.log('American European Diff: ', americanEuropeanDiff);

const americanAustralianDiff = differenceInMinutes(centralAmericanDateTime, australianDateTime);
console.log('American Australian Diff: ', americanAustralianDiff);




const chicagoDateTime = new Date();
const chicagoOffset = chicagoDateTime.getTimezoneOffset();

const testUtc = addMinutes(chicagoDateTime, chicagoOffset);

const melbourne = utcToZonedTime(testUtc, australianTimeZone);
const dss = differenceInMinutes(testUtc, melbourne);
console.log('Dss: ', dss);





// const temp = '2011-10-05T14:48:00.000Z';
// const tempTest = new Date(temp);
// const tts = tempTest.toString();
// const ttsiso = tempTest.toISOString();
// const ttsAus = utcToZonedTime(tempTest, australianTimeZone);
// const ttsAusIs = ttsAus.toString();
// const ttsAusIso = ttsAus.toISOString();
// console.log('Diff ttsAusIs and ttsAusiso', ttsAusIs, ttsAusIso);

// console.log('TTS and TTSISo; ', tts, ttsiso);

// // const pattern = 'd.M.yyyy HH:mm:ss.SSS [GMT]Z (z)';

// const testA = parseISO(ttsiso);
// const testB = parseISO(ttsAusIso);

// const dddfff = differenceInMinutes(testA, testB);
// console.log('ddfff', dddfff);












// const time = format(new Date(), 'yyyy/MM/dd HH:mm');
// console.log('Time: ', time);

// const mom = moment();
// const time = mom.format('HH:mm:ss');

// const hour = mom
// const rounded = mom.round(15, 'minutes').format('HH:mm:ss');
// console.log('Time: ', time, ' and rounded: ', rounded);


// const date1 = '11-11-11';
// const date2 = '11-12-11';
// const date0 = '11-10-11';

// const twoGraterOne = date2 > date1;
// const zerolLessOne = date0 > date1;

// console.log('True: ', twoGraterOne, ' and False: ', zerolLessOne);

// const testTime = '16:00';
// const timeTime2 = '16:45';

// // const dt1 = new Date(testTime, 'HH:mm');
// // const dt2 = new Date(timeTime2, 'HH:mm');
// const dt1 = parse(testTime, 'HH:mm', new Date());
// const dt2 = parse(timeTime2, 'HH:mm', new Date());

// const diff = differenceInMinutes(dt2, dt1);
// console.log('Diff: ', diff);





// const offset = new Date().getTimezoneOffset();
// console.log('Offset: ', offset);

// const total = 5 * 60;
// console.log('Expected: ', total);

// function dstAwareDate() {
//   this.d = new Date();

//   this.stdTimezoneOffset = function () {
//     const jan = new Date(this.d.getFullYear(), 0, 1);
//     const jul = new Date(this.d.getFullYear(), 6, 1);
//     return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
//   };

//   this.isDSTObserved = function () {
//     return this.d.getTimezoneOffset() < this.stdTimezoneOffset();
//   }

//   this.dstAwareTzOffset = function() {
//     const offset = this.d.getTimezoneOffset();
//     if (this.isDSTObserved()) {
//       console.log('DST is observed');
//     } else {
//       console.log('DST is not observed');
//     }
//     return offset;
//   };

//   this.getTimeZone = function() {
//     const s = this.d.toTimeString();
//     console.log('s: ', s);
//   }
// }

// const dst = new dstAwareDate()
// console.log('TZO: ', dst.dstAwareTzOffset());


// dst.getTimeZone();

// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone);

// const zoneA = 'America/Chicago';
// const zoneB = 'Europe/Berlin';

// const chicago = new Date();
// const chicagoOffset = chicago.getTimezoneOffset();
// console.log('Chicago offset: ', chicagoOffset);

// const utc = zonedTimeToUtc(chicago, zoneA);
// const test = utc.toISOString();
// console.log('Test: ', test);
// const utcOffset = utc.getTimezoneOffset();
// console.log('UTC offset: ', utcOffset);

// const berlin = utcToZonedTime(utc, zoneB);
// const berlinOffset = utc.getTimezoneOffset();
// const test2 = berlin.toISOString();
// console.log('Test 2: ', test2);
// console.log('Berlin offset: ', berlinOffset);


// const dateA = new Date();
// const dateAOffset = dateA.getTimezoneOffset();
// console.log('Date A offset')
// const dateAPrintable = format(dateA);

// const dateB = zonedTimeToUtc(dateA)



// const nyTimeZone = 'America/New_York';
// const parisTimeZone = 

// const date = new Date('2014-02-25T10:46:20Z');

// const kolkataTimeZone = 'Asia/Kolkata';

// const nyDate = utcToZonedTime(date, nyTimeZone);
// const nfOffset = nyDate.getTimezoneOffset();
// const parisDate = utcToZonedTime(date, parisTimeZone);
// const parisOffset = parisDate.getTimezoneOffset();
// console.log('NY and paris offset: ', nfOffset, parisOffset);
// const kolkataDate = utcToZonedTime(date, kolkataTimeZone);
// const kolkataOffset = kolkataDate.getTimezoneOffset();
// console.log('Kolkata offset: ', kolkataOffset);

// const yyyy = format(nyDate, 'yyyy-MM-dd HH:mm:ss XXX', { timeZone: 'America/New_York' })  // 2014-10-25 06:46:20-04:00
// const xxxx = format(nyDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'America/New_York' }) // 2014-10-25 06:46:20 EST
// const zzzz = format(parisDate, 'yyyy-MM-dd HH:mm:ss zzz', { timeZone: 'Europe/Paris' })  // 2014-10-25 10:46:20 GMT+2
// console.log(yyyy);
// console.log(xxxx);
// console.log(zzzz);



// DST dates are 3/8 - 11/1
// const dateInDst = new Date('2020-04-03T11:43:02Z'); // NOTE: the 'Z' at the end indicates this time is UTC
// const dateOutOfDst = new Date('2020-02-03T11:43:02Z');
// const dateInDst = new Date('2020-04-03'); // NOTE: the 'Z' at the end indicates this time is UTC
// const dateOutOfDst = new Date('2020-02-03');

// const nyDateInDst = utcToZonedTime(dateInDst, nyTimeZone);
// const nyDateOutOfDst = utcToZonedTime(dateOutOfDst, nyTimeZone);
// const parisInDst = utcToZonedTime(dateInDst, parisTimeZone);
// const parisOutOfDst = utcToZonedTime(dateOutOfDst, parisTimeZone);

// // const pattern = 'd.M.yyyy HH:mm:ss.SSS [GMT]Z (z)'


// const pattern = 'd.M.yyyy HH:mm:ss'
// const utcPattern = 'd.M.yyyy HH:mm:ss xxx'


// const nyDateInDstOffset = format(nyDateInDst, pattern, {timeZone: nyTimeZone});
// const nyDateOutOfDstOffset = format(nyDateOutOfDst, pattern, {timeZone: nyTimeZone});
// const parisDateInDstOffset = format(parisInDst, pattern, {timeZone: parisTimeZone});
// const parisDateOutOfDstOffset = format(parisOutOfDst, pattern, {timeZone: parisTimeZone});

// console.log('NY timezone offset in DST: ', nyDateInDstOffset);
// console.log('NY timezone offset out of DST: ', nyDateOutOfDstOffset);
// console.log('Paris timezone offset in DST: ', parisDateInDstOffset);
// console.log('Paris timezone offset out of DST: ', parisDateOutOfDstOffset);








// // I am in the central zone
// const centralAmericanDateTime = new Date();
// const formatCADT = format(centralAmericanDateTime, pattern);
// console.log('CADT: ', formatCADT);
// // Converting my time to UTC
// const utcDateTime = zonedTimeToUtc(centralAmericanDateTime, centralAmericanTimeZone);
// const formatUTCDT = format(utcDateTime, utcPattern);
// // const formatUTCDT = utcDateTime.toISOString();// format(utcDateTime, pattern);
// console.log('UTCDT: ', formatUTCDT);
// // Converting UTC to Central European
// const centralEuropeanDateTime = utcToZonedTime(utcDateTime, centralEuropeanTimeZone);
// const formatCEDT = format(centralEuropeanDateTime, pattern);
// console.log('CEDT: ', formatCEDT);
// // Getting the difference in minutes between UTC and Central European time
// const timeDiff = differenceInMinutes(centralEuropeanDateTime, utcDateTime);
// console.log('Central Europe is ', timeDiff, ' minutes ahead of UTC.');

// const timeDiff0 = differenceInMinutes(centralAmericanDateTime, utcDateTime);
// console.log('0: ', timeDiff0);
// const timeDiff2 = differenceInMinutes(centralEuropeanDateTime, centralAmericanDateTime);
// console.log('2: ', timeDiff2);


// const ttas = '2020-04-03T11:43:02Z'; //Z means it is UTC time
// const ttDate = new Date(ttas);














// // const pattern = 'M.d.yyyy HH:mm:ss XXX xxx OOOO zzzz';
// const pattern = 'ppp'

// const centralDT = new Date();
// const centralDTformatted = format(centralDT, pattern);
// const centralDTformattedTz = format(centralDT, pattern, {timeZone: centralTimeZone});
// console.log('Central Time: ', centralDTformatted, centralDTformattedTz);


// const utcDT = zonedTimeToUtc(centralDT, centralTimeZone);
// // const utcFormatted = format(utcDT, pattern);
// const utcFormatted = utcDT.toISOString();
// console.log('UTC Time: ', utcFormatted);


// const parisDt = utcToZonedTime(utcDT, centralEuropeanTZ);
// const parisDtFormatted = format(parisDt, pattern, {timeZone: centralTimeZone});
// // const parisDtFormatted = parisDt.toISOString();
// console.log('Paris Time: ', parisDtFormatted);

// const diffInMin = differenceInMinutes(parisDt, utcDT);
// console.log('Diff in min: ', diffInMin);

