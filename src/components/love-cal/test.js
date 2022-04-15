function isAlphaKey(evt) {
  evt = evt ? evt : event;
  var charCode = evt.charCode ? evt.charCode : evt.keyCode ? evt.keyCode : evt.which ? evt.which : 0;
  if (charCode == 45) return true;
  if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
    return false;
  }
  return true;
}
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
function processForm() {
  document.getElementById('result').style.display = 'none';
  var your_name = document.getElementById('your_name').value;
  var partner_name = document.getElementById('partner_name').value;
  if (your_name == '') {
    alert('Please enter Your Name');
    your_name.focus;
    return false;
  }
  if (partner_name == '') {
    alert('Please enter Your Partner Name');
    partner_name.focus;
    return false;
  }
  var fullstring = your_name + ' loves ' + partner_name;
  var numStr = convertStrToNumberLogic(fullstring);
  var rescontent;
  if (numStr >= 0 && numStr <= 20) {
    rescontent =
      '<img src=https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-0-20.jpg alt="Love calculator" title="Love calculator"/><p>If Elizabeth and Mr. Darcy of Pride and Prejudice had calculated their love compatibility, chances are they would have found themselves in this category! But love stories in 1813 were quite different from modern love stories. Compatibility of personalities and sometimes even professions is a MUST. If you do not have that with your crush or current partner, you sure will find it with a more warm soul who will be ready to accept as you are.';
  } else if (numStr >= 21 && numStr <= 50) {
    rescontent =
      '<img src=https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-21-50.jpg alt="Love calculator" title="Love calculator"/><p>Is your partner going hot and cold on you? Do you often feel like you are chasing a mirage? Probably, you are. Listen, your heart is not always right. Hormones play tricks all the time. If you both are looking for a fling, this number is good. But if you are looking for something meaningful, look for the real deal. Fix your love glasses because your person is probably right in front of your eyes';
  } else if (numStr >= 51 && numStr <= 79) {
    rescontent =
      '<img src=https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-51-79.jpg alt="Love calculator" title="Love calculator"/><p>You may not agree on everything, but you both care for each other. Discussions are intense, so are your parting hugs. Compatibility may not be 100%, but love sure is in the air. If there’s something that is bothering you about your partner, sit down, and have a conversation. Address the issues before they get out of hand. Having healthy boundaries is good for both of you in the long run. Also, don’t forget to empathize with your partner’s difference in opinion and outlook.';
  } else if (numStr >= 80 && numStr <= 100) {
    rescontent =
      '<img src=https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-80-100.jpg alt="Love calculator" title="Love calculator"/><p>Everything else fades when you’ve found “the one.” Your love and compatibility can make the gods jealous. From your choice of food, cities to travel, music to dance to, and weird hobbies – you both mirror each other, bringing out the best of your personalities and qualities. Yes, there are occasional arguments, but you both soon find solutions and go about your day. What you have is precious (*touchwood). Nurture and preserve. Time may test your bond, but you sure will overcome it.';
  }
  document.getElementById('result').style.display = 'block';
  document.getElementById('result_string').innerHTML = fullstring;
  document.getElementById('result_numstr').innerHTML = numStr;
  document.getElementById('result_rescontent').innerHTML = rescontent;
  jQuery('html,body').animate({ scrollTop: jQuery('#result').offset().top - 5 }, 'slow');
}
function convertStrToNumberLogic(str) {
  str = str.replace(/ /g, '').toLowerCase();
  var i = 0;
  var num = '';
  while (str.length) {
    var c = str.charAt(i);
    var pattern = new RegExp(c, 'g');
    num += str.split(c).length - 1;
    str = str.replace(pattern, '');
  }
  var per = calculateLovePercentage(num);
  return per;
}
function calculateLovePercentage(str) {
  var per = '';
  while (str.length) {
    if (str.length == 1) {
      var f = str.charAt(0);
      per += f;
      str = '';
    } else {
      var f = str.charAt(0);
      var l = str.charAt(str.length - 1);
      per += +f + +l;
      var position = 1;
      str = str.substring(0, position - 1) + str.substring(position, str.length);
      position = str.length;
      str = str.substring(0, position - 1) + str.substring(position, str.length);
    }
  }
  if (per.length > 2) per = calculateLovePercentage(per);
  return per;
}
