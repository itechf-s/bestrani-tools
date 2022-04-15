import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';

type Inputs = {
  name: String,
  partnerName: String
};

type Result = { name: string, score: string, img: string, msg: string }
const resultList: Result[] = [

  { name: "", score: "0-20", img: "https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-0-20.jpg", msg: "If Elizabeth and Mr. Darcy of Pride and Prejudice had calculated their love compatibility, chances are they would have found themselves in this category! But love stories in 1813 were quite different from modern love stories. Compatibility of personalities and sometimes even professions is a MUST. If you do not have that with your crush or current partner, you sure will find it with a more warm soul who will be ready to accept as you are." },
  { name: "", score: "21-50", img: "https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-21-50.jpg", msg: "Is your partner going hot and cold on you? Do you often feel like you are chasing a mirage? Probably, you are. Listen, your heart is not always right. Hormones play tricks all the time. If you both are looking for a fling, this number is good. But if you are looking for something meaningful, look for the real deal. Fix your love glasses because your person is probably right in front of your eyes" },
  { name: "", score: "51-79", img: "https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-51-79.jpg", msg: "You may not agree on everything, but you both care for each other. Discussions are intense, so are your parting hugs. Compatibility may not be 100%, but love sure is in the air. If there’s something that is bothering you about your partner, sit down, and have a conversation. Address the issues before they get out of hand. Having healthy boundaries is good for both of you in the long run. Also, don’t forget to empathize with your partner’s difference in opinion and outlook." },
  { name: "", score: "80-100", img: "https://www.stylecraze.com/wp-content/themes/buddyboss-child/images/love-image-80-100.jpg", msg: "Everything else fades when you’ve found “the one.” Your love and compatibility can make the gods jealous. From your choice of food, cities to travel, music to dance to, and weird hobbies – you both mirror each other, bringing out the best of your personalities and qualities. Yes, there are occasional arguments, but you both soon find solutions and go about your day. What you have is precious (*touchwood). Nurture and preserve. Time may test your bond, but you sure will overcome it." },
]

export default function LoveCal() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    let fullName = data.name + ' loves ' + data.partnerName;
    let numStr = parseInt(convertStrToNumberLogic(fullName));
    let resultData: Result = resultList[0]
    if (numStr >= 0 && numStr <= 20) {
      resultData = resultList[0]
    } else if (numStr >= 21 && numStr <= 50) {
      resultData = resultList[1]
    } else if (numStr >= 51 && numStr <= 79) {
      resultData = resultList[2]
    } else if (numStr >= 80 && numStr <= 100) {
      resultData = resultList[3]
    }
    resultData.name = fullName;
    resultData.score = String(numStr);

    setResult(resultData)
  }
  const [result, setResult] = useState<Result>({ name: "", score: "", img: "", msg: "" });
  console.log(watch("name"))

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)} >
        <label>Your Name</label>
        <br />
        <input type="text" placeholder="Your Name" {...register("name", { required: true })}
          className={tw(`text-red-500 py-3 mb-3`)} />
        {errors.name && <span className={tw(`text-red-500 py-3 mb-3`)}>Name is required</span>}
        <br />
        <label>Your Partner Name</label>
        <br />
        <input type="text" placeholder="Your Partner Name" {...register("partnerName", { required: true })}
          className={tw(`text-red-500 py-3 mb-3`)}
        />
        {errors.partnerName && <span className={tw(`text-red-500 py-3 mb-3`)}>Partner Name is required</span>}

        <br />
        <button className={tw(`text-uppercase inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm`)}>
          Calculate
        </button>
      </form>
      {result.name &&
        <>
        <div className={tw(`text-red-500 py-3 mb-3`)}>Results</div>
      <div className={tw(`text-center border-green-400 border`)}>
        <div>{result.name}</div>
        <div>{result.score} %</div>
        <div><img src={result.img} alt="Love calculator" title="Love calculator" height={100} width={100} /></div>
        <div>{result.msg}</div>
      </div>
        </>
      }
    </div>
  );
}


function convertStrToNumberLogic(str: String) {
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
function calculateLovePercentage(str: String) {
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