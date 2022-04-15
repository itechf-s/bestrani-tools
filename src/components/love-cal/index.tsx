import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';

type Inputs = {
  name : String,
  partnerName : String
};

export default function LoveCal() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    result.name="Test"
  }
  const [result, setResult] = useState({name:"Amit"});
  console.log(watch("name"))

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)} >
      <label>Your Name</label>
      <br />
      <input type="text" placeholder="Your Name" {...register("name", {required: true})}
      className={tw(`text-red-500 py-3 mb-3`)} />
      {errors.name && <span className={tw(`text-red-500 py-3 mb-3`)}>Name is required</span>}
      <br />
      <label>Your Partner Name</label>
      <br />
      <input type="text" placeholder="Your Partner Name" {...register("partnerName", {required : true})}
      className={tw(`text-red-500 py-3 mb-3`)}
      />
      {errors.partnerName && <span className={tw(`text-red-500 py-3 mb-3`)}>Partner Name is required</span>}

        <br/>
        <button className={tw(`text-uppercase inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm`)}>
          Calculate
        </button>
      </form>
      <div className={tw(`text-center border-green-400 border`)}>
        <div>{result.name}</div>
        <div>Image</div>
        <div>Msg</div>

      </div>
    </div>
  );
}


function convertStrToNumberLogic(str : String) {
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
function calculateLovePercentage(str : String) {
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