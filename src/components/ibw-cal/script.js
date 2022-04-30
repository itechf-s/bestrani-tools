var objIWC = {
  bmiRange: function () {
    var feet = Number($('#feet').val()),
      inch = Number($('#inches').val()),
      fToIn = feet * 12,
      finalVal = (fToIn + inch) * 2.54,
      fincalCM = $("input[name='unit']:checked").val() == 'cm' ? $('#cm').val() : finalVal,
      height = fincalCM / 100,
      w1 = 18.5 * Math.pow(height, 2),
      w2 = 25 * Math.pow(height, 2);

    $('.bmi_result').text(w1.toFixed(1) + ' - ' + w2.toFixed(1));
  },
  petersonFormula: function () {
    var feet = Number($('#feet').val()),
      inch = Number($('#inches').val()),
      fToIn = feet * 12,
      finalVal = (fToIn + inch) * 2.54,
      fincalCM = $("input[name='unit']:checked").val() == 'cm' ? $('#cm').val() : finalVal,
      height = fincalCM / 100,
      weight = 2.2 * 22 + 3.5 * 22 * (height - 1.5),
      pound = weight * 2.205;

    $('.pet_f .kg_value').text(weight.toFixed(1));
    $('.pet_f .pound_value').text(pound.toFixed(1));
  },
  mCalc: function (mW, fW, mPW, fPW) {
    var weight = '',
      finalVal = '';

    if ($("input[name='unit']:checked").val() == 'cm') {
      finalVal = $('#cm').val() / 2.54 - 60;
    } else {
      var feet = Number($('#feet').val()),
        inch = Number($('#inches').val()),
        fToIn = feet * 12 - 60,
        finalVal = fToIn + inch;
    }

    if ($("input[name='gender']:checked").val() == 'men') {
      weight = mW + mPW * finalVal;
    } else {
      weight = fW + fPW * finalVal;
    }

    return weight.toFixed(1);
  },
  hamFormula: function () {
    var weight = objIWC.mCalc(48, 45.5, 2.7, 2.2),
      pound = weight * 2.205;

    $('.ham_f .kg_value').text(weight);
    $('.ham_f .pound_value').text(pound.toFixed(1));
  },
  devFormula: function () {
    var weight = objIWC.mCalc(50, 45.5, 2.3, 2.3),
      pound = weight * 2.205;

    $('.dev_f .kg_value').text(weight);
    $('.dev_f .pound_value').text(pound.toFixed(1));
  },
  robFormula: function () {
    var weight = objIWC.mCalc(52, 49, 1.9, 1.7),
      pound = weight * 2.205;

    $('.rob_f .kg_value').text(weight);
    $('.rob_f .pound_value').text(pound.toFixed(1));
  },
  milFormula: function () {
    var weight = objIWC.mCalc(56.2, 53.1, 1.41, 1.36),
      pound = weight * 2.205;

    $('.mil_f .kg_value').text(weight);
    $('.mil_f .pound_value').text(pound.toFixed(1));
  },
  showResult: function () {
    objIWC.bmiRange();
    objIWC.petersonFormula();
    objIWC.hamFormula();
    objIWC.devFormula();
    objIWC.robFormula();
    objIWC.milFormula();
    if ($('#age').val() < 18 || $('#feet').val() < 5) {
      $('.wc_result_list').hide();
      $('.wc_result_head').hide();
    }
  },
  bind: function () {
    $("input[type='text']").focus(function () {
      if ($(this).hasClass('auto')) {
        $(this).val('');
        $(this).removeClass('auto');

        if ($(this).parents('.form_box').hasClass('height_box')) {
          $('.height_box input').removeClass('auto');
        }
      }

      $(this).parents('.input_field').removeClass('err_input');
    });

    $("input[type='text']").blur(function () {
      if ($(this).val() == '') {
        $(this).val($(this).attr('data-value'));
        $(this).addClass('auto');

        if ($(this).parents('.form_box').hasClass('height_box')) {
          $('.height_box input').addClass('auto');
        }
      }
    });

    $('#inches').on('keyup blur', function () {
      if ($(this).val() > 11) {
        var inchVal = $(this).val() % 12,
          feetVal = Math.floor($(this).val() / 12),
          getFeet = $('#feet').val(),
          finalFeetVal = Number(feetVal) + Number(getFeet);

        $('#feet').val(finalFeetVal);
        $('#inches').val(inchVal);
      }

      var fVal = $('#feet').val(),
        iVal = $('#inches').val();

      calCM = Number(fVal) * 30.48 + Number(iVal) * 2.54;
      $('#cm').val(Math.round(calCM));
    });

    $('#cm').on('keyup blur', function () {
      var cmVal = $(this).val();
      (length = cmVal / 2.54), (feet = Math.floor(length / 12));
      inch = Math.floor(length - 12 * feet);

      $('#feet').val(feet);
      $('#inches').val(inch);
    });

    $('#feet').on('keyup blur', function () {
      var fVal = $('#feet').val(),
        iVal = $('#inches').val();

      calCM = Number(fVal) * 30.48 + Number(iVal) * 2.54;
      $('#cm').val(Math.round(calCM));
    });

    $("input[type='text']").ForceNumericOnly();

    $("input[name='unit']").change(function () {
      var checkedVal = $("input[name='unit']:checked").val();
      checkedVal == 'cm'
        ? $("label[for='cm']").removeClass('hide').siblings().addClass('hide')
        : $("label[for='cm']").addClass('hide').siblings().removeClass('hide');
    });

    $('.submit_btn').click(function () {
      var ageVal = Number($('#age').val()),
        cmVal = Number($('#cm').val());

      if (ageVal == 0) {
        $('.age_box .input_field .err_msg').text('Please enter correct value');
        $('.age_box .input_field').addClass('err_input');
      }

      if (cmVal == 0) {
        $('.height_box .input_field .err_msg').text('Please enter correct value');
        $('.height_box .input_field').addClass('err_input');
      }

      if (!$('.wc_wrap .input_field').hasClass('err_input')) {
        $('.wc_form, .calc_sys').addClass('hide');
        $('.wc_result').removeClass('hide');
        objIWC.showResult();
      }
    });
  },
};

$(document).ready(function () {
  $.fn.ForceNumericOnly = function () {
    return this.each(function () {
      $(this).keydown(function (e) {
        var key = e.charCode || e.keyCode || 0;
        // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
        // home, end, period, and numpad decimal
        return (
          key == 8 ||
          key == 9 ||
          key == 13 ||
          key == 46 ||
          (key >= 35 && key <= 40) ||
          (key >= 48 && key <= 57) ||
          (key >= 96 && key <= 105)
        );
      });
    });
  };
  objIWC.bind();
});
