function isLeapYear(year){ //判定
  if (year < 4) return false;

  return year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
}

function countLeapYear(fromYear, toYear){ //数え上げ
  var count = 0;

  for (var i = fromYear; i <= toYear; i++)
    if (isLeapYear(i)) count++;

  return count;
}
