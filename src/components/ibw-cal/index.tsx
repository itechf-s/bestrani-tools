import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';
import style from "@/components/style"

type Inputs = {
  gender : string,
  age: String,
  height: String
};

type Result = { name: string, score: string, img: string, msg: string }
const resultList: Result[] = [

  { name: "", score: "0-20", img: "https://img.bestrani.com/2022/03/love-image-0-20.webp", msg: "If Elizabeth and Mr. Darcy of Pride and Prejudice had calculated their love compatibility, chances are they would have found themselves in this category! But love stories in 1813 were quite different from modern love stories. Compatibility of personalities and sometimes even professions is a MUST. If you do not have that with your crush or current partner, you sure will find it with a more warm soul who will be ready to accept as you are." },
  { name: "", score: "21-50", img: "https://img.bestrani.com/2022/03/love-image-21-50.webp", msg: "Is your partner going hot and cold on you? Do you often feel like you are chasing a mirage? Probably, you are. Listen, your heart is not always right. Hormones play tricks all the time. If you both are looking for a fling, this number is good. But if you are looking for something meaningful, look for the real deal. Fix your love glasses because your person is probably right in front of your eyes" },
  { name: "", score: "51-79", img: "https://img.bestrani.com/2022/03/love-image-51-79.webp", msg: "You may not agree on everything, but you both care for each other. Discussions are intense, so are your parting hugs. Compatibility may not be 100%, but love sure is in the air. If there’s something that is bothering you about your partner, sit down, and have a conversation. Address the issues before they get out of hand. Having healthy boundaries is good for both of you in the long run. Also, don’t forget to empathize with your partner’s difference in opinion and outlook." },
  { name: "", score: "80-100", img: "https://img.bestrani.com/2022/03/love-image-80-100.webp", msg: "Everything else fades when you’ve found “the one.” Your love and compatibility can make the gods jealous. From your choice of food, cities to travel, music to dance to, and weird hobbies – you both mirror each other, bringing out the best of your personalities and qualities. Yes, there are occasional arguments, but you both soon find solutions and go about your day. What you have is precious (*touchwood). Nurture and preserve. Time may test your bond, but you sure will overcome it." },
]

export default function IdealBodyWeight() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data.gender);
    
  }
  const [result, setResult] = useState<Result>({ name: "", score: "", img: "", msg: "" });

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${style.twForm}`} >
        <label className={tw`${style.twLabel}`}>Gender</label>
        <br />
      <input {...register("gender", { required: true })} type="radio" id="male" value="Male" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="male" className={tw`${style.twRadioLabel}`}>Male</label>
      <input {...register("gender", { required: true })} type="radio" id="female" value="Female" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="female" className={tw`${style.twRadioLabel}`}>Female</label>

      <br />
        <label className={tw`${style.twLabel}`}>System</label>
        <br />
        <input {...register("gender", { required: true })} type="radio" id="Metric" value="Metric" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="Metric" className={tw`${style.twRadioLabel}`}>Metric</label>
      <input {...register("gender", { required: true })} type="radio" id="Imperial" value="Imperial" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="Imperial" className={tw`${style.twRadioLabel}`}>Imperial</label>

        <br />
        <label className={tw`${style.twLabel}`}>Age</label>
        <br />
        <input type="text" placeholder="Your Age 2-85" {...register("age", { required: true })}
          className={tw`${style.twInputText}`} />
        {errors.age && <span className={tw`${style.twErrorMsg}`}>Age is required</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Your Height</label>
        <br />
        <input type="text" placeholder="Your Height in Cms" {...register("height", { required: true })}
          className={tw`${style.twInputText}`}
        />
        {errors.height && <span className={tw`${style.twErrorMsg}`}>Height is required</span>}

        <br />
        <button className={tw`${style.twInputBtn}`}>
          Calculate
        </button>
      </form>
      {result.name &&
        <>
          <div className={tw`${style.twResultT}`}>Results</div>
          <div className={tw`${style.twResultBlock}`}>
            <div className={tw`${style.twResultLabel}`}>{result.name}</div>
            <div className={tw`${style.twResultText}`}>{result.score} %</div>
            <div><img src={result.img} alt="Love calculator" title="Love calculator" height={100} width={100} /></div>
            <div className={tw`${style.twResultLabel}`}>{result.msg}</div>
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