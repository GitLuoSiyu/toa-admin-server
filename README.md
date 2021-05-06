
/** 时间戳 转 UTC格式时间, 入参是时间戳、返回的类型 */
const timerToUTC = (timeStamp, returnType) => {
  timeStamp = parseInt(timeStamp);
  var date = new Date();
  if (timeStamp < 90000000000) {
    date.setTime(timeStamp * 1000);
  } else {
    date.setTime(timeStamp);
  }
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
  if (returnType == 'str') { return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second; }
  return [y, m, d, h, minute, second];
}

/** 根据时间戳计算多少分钟/小时/天之后，返回具体的时间单位、具体内容，入参是 时间戳 */
const calculateTimeDiff = (time) => {
  if (time < 90000000000) { time *= 1000; }
  var timer = time - new Date().getTime();
  timer = parseInt(timer / 1000);
  if (timer < 180) {
    return {
      text: timerToUTC(time, 'str'),
      unit: "second"
    }
  } else if (timer >= 180 && timer < 3600) {
    return {
      text: timerToUTC(time, 'str'),
      unit: "minute"
    }
  } else if (timer >= 3600 && timer < 86400) {
    return {
      text: timerToUTC(time, 'str'),
      unit: "hours"
    }
  } else if (timer >= 86400 && timer < 2592000) {
    return {
      text: parseInt(timer / 86400),
      unit: "day"
    };
  } else {
    return timerToUTC(time, 'str');
  }
}
