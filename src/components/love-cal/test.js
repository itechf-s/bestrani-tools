
$('.system').click(function(){
	$sys_val = $(this).val();
	if($(this).checked != false){
		if($sys_val == 'imperial'){
			//alert("Dfsd");
			$('.imperial-height').show();
			$('.metric-height').hide();
			$('#current-weight').removeClass('current-weight-kg').addClass('current-weight-lbs');
			//$('.current-weight-kg .form-group:after').css("content","Lbs");
		} else {
			$('.imperial-height').hide();
			$('.metric-height').show();
			$('#current-weight').removeClass('current-weight-lbs').addClass('current-weight-kg');
		}
	}
});


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}
function convertfeettoinches(heightfeet){
	return heightfeet*12;
}
/* convert height from meters to inches */
function conv_hgt_inches(height) {
	return Math.round(parseFloat(height /2.54));
}
/* convert weight from kg to pounds */
function conv_wgt_punds(wtg_set) {
	return Math.round(parseFloat(wtg_set * 2.20462));
}

function processForm() {
    document.getElementById('result').style.display = "none";
    var gender_male = document.getElementById("gender_male");
    var gender_female = document.getElementById("gender_female");
    var age = document.getElementById("age").value;
    var system_metric = document.getElementById("system_metric");
	var system_imperial = document.getElementById("system_imperial");
	//var weight_lbs = document.getElementById("weight_lbs").value;
	//var user_weight = document.getElementById("weight-cms").value;
	var system = (system_metric.checked) ? system_metric.value : system_imperial.value;
	var gender = (gender_male.checked) ? gender_male.value : gender_female.value;
	if(age == 0){
	  alert("please enter age");
	  age.focus;
	  return false;
	}
    
   
	if (system == 'imperial') {

		var height_feet = document.getElementById("height_foot").value;
		var height_incs = document.getElementById("height_inch").value;
		var conver_inches = convertfeettoinches(height_feet);
		var inches = parseInt(conver_inches) + parseInt(height_incs);
		hgt = inches;
		var user_height = inches;
		set_height = parseInt(user_height);
		height_unts = 'Inches';
		wgt_unts = 'Lbs';
	} else {
		var height_cms = document.getElementById("height_cms").value;
		hgt = height_cms;
		var user_height = parseInt(height_cms);
		set_height = parseInt(conv_hgt_inches(user_height));
		height_unts = 'Cms';
		wgt_unts = 'Kgs';
	}
	
	if (system == 'imperial') {
        if (user_height < '60') {
			var result_content = "Devine 1974 method for calculating ideal body weight may not appropriate for patients with a height < 60 inches.";
			
		}
		else {
			
			if(gender == "male") {
				var fixed_height = 60;
				var bigger_height = user_height - fixed_height ;
				var hambi_multVal = 2.7 ;
				var Devine_multval = 2.3;
				var Robinson_multval = 1.9;
				var Miller_multval = 1.41;
				var Hamwi = 48 + (hambi_multVal * bigger_height);
				var Devine = 50 + (Devine_multval * bigger_height);
				var Robinson = 52 + (Robinson_multval * bigger_height);
				var Miller = 56.2 + (Miller_multval * bigger_height);
				var Hamwi_value = conv_wgt_punds(Hamwi);
				var Devine_value = conv_wgt_punds(Devine);
				var Robinson_value = conv_wgt_punds(Robinson);
				var Miller_value = conv_wgt_punds(Miller);
			  var result_content = '<div id= "bmrResults" class="text-center result_Status"><p>The ideal weight based on popular formulas:<table><tbody><tr><th>Formula<th>Ideal Weight<tr><td>Robinson (1983)<td>'+Robinson_value+' lbs<tr><td>Miller (1983)<td>'+Miller_value+' lbs<tr><td>Devine (1974)<td>'+Devine_value+' lbs<tr><td>Hamwi (1964)<td>'+Hamwi_value+' lbs'; 
        
    }
     else { 
    var fixed_height = 60;
     var bigger_height = user_height - fixed_height ;
     var hambi_multVal = 2.2 ;
     var Devine_multval = 2.3;
     var Robinson_multval = 1.7;
     var Miller_multval = 1.36;
     var Hamwi = 45.5 + (hambi_multVal * bigger_height);
     var Devine = 45.5 + (Devine_multval * bigger_height);
     var Robinson = 49 + (Robinson_multval * bigger_height);
     var Miller = 53.1 + (Miller_multval * bigger_height);
     var Hamwi_value = conv_wgt_punds(Hamwi);
     var Devine_value = conv_wgt_punds(Devine);
     var Robinson_value = conv_wgt_punds(Robinson);
     var Miller_value = conv_wgt_punds(Miller);

    var result_content = 'The ideal weight based on popular formulas:Formula	Ideal Weight Robinson (1983)	'+Robinson_value+' lbs Miller (1983)	'+Miller_value+' lbs Devine (1974)	'+Devine_value+' lbs Hamwi (1964)	'+Hamwi_value+' lbs ';
   } 
  }
 }
  else {
     if (user_height) {
     var result_content = 'The ideal weight based on popular formulas: Formula	Ideal Weight Robinson (1983)	'+Robinson_value+' kgs Miller (1983)	'+Miller_value+' kgs Devine (1974)	'+Devine_value+' kgs Hamwi (1964)	'+Hamwi_value+' kgs '; }
      else {
         var converted_height = conv_hgt_inches(user_height);
          var fixed_height = 60;
          var bigger_height = converted_height - fixed_height ;
          var hambi_multVal = 2.2 ;
          var Devine_multval = 2.3;
          var Robinson_multval = 1.7;
          var Miller_multval = 1.36;
          var Hamwi = 45.5 + (hambi_multVal * bigger_height);
          var Devine = 45.5 + (Devine_multval * bigger_height);
          var Robinson = 49 + (Robinson_multval * bigger_height);
          var Miller = 53.1 + (Miller_multval * bigger_height);
          var Hamwi_value = Math.round(Hamwi) ;
          var Devine_value = Math.round(Devine) ;
          var Robinson_value = Math.round(Robinson) ;
          var Miller_value = Math.round(Miller) ;
          var result_content = 'The ideal weight based on popular formulas:Formula	Ideal Weight Robinson (1983)	'+Robinson_value+' kgs Miller (1983)	'+Miller_value+' kgs Devine (1974)	'+Devine_value+' kgs Hamwi (1964)	'+Hamwi_value+' kgs '; 
        }
       }
       } 
       document.getElementById("result").style.display = 'block'; document.getElementById("result").innerHTML = result_content; jQuery('html,body').animate({scrollTop: jQuery("#result").offset().top - 5}, 'slow');
     }