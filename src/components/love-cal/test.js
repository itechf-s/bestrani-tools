jQuery(document).ready(function ($) {
  $('#result').hide();
  var START_YEAR = 1900;
  var currentDate = moment();
  var currentDay = parseInt(currentDate.format('D'));
  var currentMonth = parseInt(currentDate.format('M'));
  var currentYear = parseInt(currentDate.format('YYYY'));
  for (var year_item = START_YEAR; year_item <= currentYear + 50; year_item++) {
    $('.year-select').append('<option value="' + year_item + '">' + year_item + '');
    if (year_item == 1991) {
      $('.year-select option[value=' + year_item + ']').attr('selected', 'selected');
    }
  }
  $('#current_day').val(currentDay);
  $('#current_month').val(currentMonth);
  $('#current_year').val(currentYear);
  var dobDay = parseInt($('#birth_day').val());
  var dobMonth = parseInt($('#birth_month').val());
  var dobYear = parseInt($('#birth_year').val());
  var nextYear = currentYear + 1;
  var dobNext = moment([2017, 10, 20]);
  $('#generate_btn').click(function () {
    var _section = $(this).closest('.cd-content');
    var _dob_weekday;
    var currentHour = parseInt(currentDate.format('HH'));
    var currentMinute = parseInt(currentDate.format('mm'));
    var currentSecond = parseInt(currentDate.format('ss'));
    var date = parseInt($('#birth_day').val());
    var month = parseInt($('#birth_month').val());
    var year = parseInt($('#birth_year').val());
    var hour = 0;
    var minute = 0;
    var _current_date = parseInt($('#current_day').val());
    var _current_month = parseInt($('#current_month').val());
    var _current_year = parseInt($('#current_year').val());
    var _current_hour = currentHour;
    var _current_minute = currentMinute;
    var isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
    if (
      moment([_current_year, _current_month - 1, _current_date]).unix() <= moment([year - 1, month - 1, date]).unix()
    ) {
      toastr.error('Date of birth needs to be earlier than the age at date.', 'Incorrect Date!');
      return !1;
    }
    if (isNaN(date) || isNaN(month) || isNaN(year)) {
      toastr.error('Date must be in the correct Day.', 'Incorrect Date!');
      return !1;
    } else {
      if (date > 31 || date < 1) {
        toastr.error('Date must be in the correct Day.', 'Incorrect Day!');
        return !1;
      } else if ((month == 4 || month == 6 || month == 9 || month == 11) && date == 31) {
        toastr.error('Date must be in the correct Day.', 'Incorrect Day!');
        return !1;
      } else if ((month == 2 && date > 29) || (month == 2 && date == 29 && !isleap)) {
        toastr.error('Date must be in the correct Day.', 'Incorrect Day!');
        return !1;
      }
      if (month > 12 || month < 1) {
        toastr.error('Date must be in the correct month.', 'Incorrect Month!');
        return !1;
      }
      if (year > 2050 || year < 1900 || year > _current_year || (year == _current_year && month > _current_month)) {
        toastr.error('Date must be in the correct year.', 'Incorrect Year!');
        return !1;
      }
    }
    var birthMoment = [year, month - 1, date, hour, minute];
    var currentMoment = moment({
      years: _current_year,
      months: _current_month - 1,
      days: _current_date,
      hours: _current_hour,
      minutes: _current_minute,
      seconds: currentSecond,
    });
    getAllAge(moment(birthMoment), moment(currentMoment));
    getMonth(moment(birthMoment), moment(currentMoment));
    getWeek(moment(birthMoment), moment(currentMoment));
    getDays(moment(birthMoment), moment(currentMoment));
    getHours(moment(birthMoment), moment(currentMoment));
    getMinutes(moment(birthMoment), moment(currentMoment));
    getSeconds(moment(birthMoment), moment(currentMoment));
    $('#result').show();
    $('.results-block,.results-block .loader, .progress-sec').removeClass('hidden');
    setTimeout(function () {
      $('.results-block .loader').addClass('hidden');
    }, 500);
  });
});
function getAllAge(dob, current) {
  var years = current.diff(dob, 'year');
  dob.add(years, 'years');
  var months = current.diff(dob, 'months');
  dob.add(months, 'months');
  var days = current.diff(dob, 'days');
  $('#result_full').text(years + ' years, ' + months + ' months, ' + days + ' days');
}
function getMonth(dob, current) {
  var months = current.diff(dob, 'months');
  dob.add(months, 'months');
  var week = current.diff(dob, 'week');
  dob.add(week, 'week');
  var days = current.diff(dob, 'days');
  $('#result_month').text(months + ' months, ' + week + ' weeks, ' + days + ' days');
}
function getWeek(dob, current) {
  var week = current.diff(dob, 'week');
  dob.add(week, 'week');
  var days = current.diff(dob, 'days');
  dob.add(days, 'days');
  var hours = current.diff(dob, 'hours');
  $('#result_week').text(week + ' weeks, ' + days + ' days, ' + hours + ' hours');
}
function getDays(dob, current) {
  var days = current.diff(dob, 'days');
  dob.add(days, 'days');
  var hours = current.diff(dob, 'hours');
  dob.add(hours, 'hours');
  var minutes = current.diff(dob, 'minutes');
  $('#result_days').text(days + ' days, ' + hours + ' hours, ' + minutes + ' minutes');
}
function getHours(dob, current) {
  var hours = current.diff(dob, 'hours');
  dob.add(hours, 'hours');
  var minutes = current.diff(dob, 'minutes');
  dob.add(minutes, 'minutes');
  var seconds = current.diff(dob, 'seconds');
  $('#result_hours').text(hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds');
}
function getMinutes(dob, current) {
  var minutes = current.diff(dob, 'minutes');
  dob.add(minutes, 'minutes');
  var seconds = current.diff(dob, 'seconds');
  $('#result_minutes').text(minutes + ' minutes, and ' + seconds + ' seconds');
}
function getSeconds(dob, current) {
  var seconds = current.diff(dob, 'seconds');
  dob.add(seconds, 'seconds');
  $('#result_seconds').text(seconds + ' seconds since your birth');
}
