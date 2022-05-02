$('.system').click(function () {
  $sys_val = $(this).val();
  if ($(this).checked != false) {
    if ($sys_val == 'imperial') {
      $('.imperial-height').show();
      $('.imperial-weight').show();
      $('.metric-height').hide();
      $('.metric-weight').hide();
    } else {
      $('.imperial-height').hide();
      $('.imperial-weight').hide();
      $('.metric-height').show();
      $('.metric-weight').show();
    }
  }
});
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
function convertfeettoinches(heightfeet) {
  return parseInt(heightfeet * 12);
}
function conv_wgt_punds(wtg_set) {
  return Math.round(parseFloat(wtg_set * 2.20462));
}
function conv_wgt_kgs(wtg_set) {
  return Math.round(parseFloat(wtg_set * 0.453592));
}
function processForm() {
  document.getElementById('result').style.display = 'none';
  var system_metric = document.getElementById('system_metric');
  var system_imperial = document.getElementById('system_imperial');
  var exercise = document.getElementById('min_exercise').value;
  var system = system_metric.checked ? system_metric.value : system_imperial.value;
  if (exercise == '') {
    alert('please enter Mins of exercise');
    exercise.focus;
    return false;
  }
  var ounces = '',
    cups = '',
    liters,
    usr_wgt,
    wgt,
    workout_cal,
    tot_ounces;
  if (system == 'metric') {
    var weight_kg = document.getElementById('current-weight-kg').value;
    usr_wgt = weight_kg + ' kg';
    if (weight_kg == '') {
      alert('please enter current weight');
      weight_kg.focus;
      return false;
    }
    wgt = conv_wgt_punds(weight_kg);
  }
  if (system == 'imperial') {
    var weight_lbs = document.getElementById('current-weight-lbs').value;
    if (weight_lbs == '') {
      alert('please enter current weight');
      weight_lbs.focus;
      return false;
    }
    wgt = weight_lbs;
  }
  console.log(wgt);
  console.log(exercise);
  ounces = Math.round(parseFloat(wgt) * parseFloat(2 / 3));
  console.log(ounces);
  workout_cal = (parseFloat(exercise) / parseFloat(30)) * parseFloat(12);
  console.log(workout_cal);
  tot_ounces = Math.round(parseFloat(ounces) + parseFloat(workout_cal));
  liters = (parseFloat(tot_ounces) * parseFloat(0.0295735)).toFixed(2);
  cups = (parseFloat(tot_ounces) * parseFloat(0.125)).toFixed(2);
  console.log(tot_ounces);
  document.getElementById('result').style.display = 'block';
  document.getElementById('result_ounces').innerHTML = tot_ounces;
  document.getElementById('result_liters').innerHTML = liters;
  document.getElementById('result_cups').innerHTML = cups;
  jQuery('html,body').animate({ scrollTop: jQuery('#result').offset().top - 5 }, 'slow');
}
