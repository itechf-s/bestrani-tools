function processForm() {
    document.getElementById('result').style.display = "none";
    var gender_male = document.getElementById("gender_male");
    var gender_female = document.getElementById("gender_female");
    var system_metric = document.getElementById("system_metric");
	var system_imperial = document.getElementById("system_imperial");
	var activity = document.getElementById("sel1").value;
	var user_weight = document.getElementById("weight-cms").value;
	var system = (system_metric.checked) ? system_metric.value : system_imperial.value;
	var gender = (gender_male.checked) ? gender_male.value : gender_female.value;
	if(user_weight == ''){
	  alert("please enter current weight");
	  document.getElementById("weight-cms").focus;
	  return false;
	}
	if(system == 'imperial'){
		user_weight = conv_wgt_kgs(user_weight);
	}
	var protein_intake = parseFloat(user_weight) * parseFloat(activity);
	document.getElementById("result").style.display = 'block';
	document.getElementById("result").innerHTML = '<h2>Result<div class="bac-container"><p>Protein per day : <span>'+ protein_intake +' grams';
   
  