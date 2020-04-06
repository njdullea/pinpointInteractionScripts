import moment from 'moment';

const adjustTimeAndDatesToUTC = (time, dates) => {
  const finalTime = moment(time, 'HH:mm').utc().format('HH:mm');
  const finalDates = dates.map(x => moment(x + ' ' + time, 'YYYY-MM-DD HH:mm:ss').utc().format('YYYY-MM-DD'));

  return {time: finalTime, dates: finalDates};
  
  // const dateFormat = 'YYYY-MM-DD';
  // const offset = new Date().getTimezoneOffset();
  // const dateTime = moment(dates[0] + ' ' + time, 'YYYY-MM-DD HH:mm');
  // const test = dateTime.utc();
  // console.log(test.format('HH:mm'));
  // const adjDateTime = dateTime.clone().add(offset, 'm');
  // const finalTime = adjDateTime.format('HH:mm');
  // const testOriginalDate = dateTime.format(dateFormat);
  // const testAdjDate = adjDateTime.format(dateFormat);
  // console.log(testAdjDate, testOriginalDate);
  // const dateDiff = testAdjDate - testOriginalDate;
  // console.log('Date diff: ', dateDiff);

  // let finalDates;
  // if (dateDiff !== 0) {
  //   finalDates = dates.map(x => moment(x, 'YYYY-MM-DD').add(dateDiff, 'd').format(dateFormat));
  // } else {
  //   finalDates = dates;
  // }

  // return {time: finalTime, dates, finalDates};
  // const dateTime = new Date();
  // const offset = dateTime.getTimezoneOffset();
  // console.log('Offset: ', offset);
  // const adjTime = moment(time, 'HH:mm').add(offset, 'm').format('HH:mm');
  // console.log('Adj time: ', adjTime);
}

const time1 = '23:45';
const dates1 = ['2020-04-06', '2020-04-07'];

const result = adjustTimeAndDatesToUTC(time1, dates1);
console.log('Result: ', result);