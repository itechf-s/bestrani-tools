import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';

type Inputs = {
  birthDate : Date,
  presentDate : Date
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("birthDate"))

  return (
       <div className={tw(`container`)}>
  
       <center>
      <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-800 block p-6 rounded-lg shadow-lg bg-pink-200 max-w-sm m-6`)} >
  
      
      <label><p class="text-lg text-black font-semibold">SELECT DATE OF BIRTH</p></label>
      <br />
      <input type="date" placeholder="birthDate" defaultValue="2017-10-13" {...register("birthDate", {required: true})}
      className={tw(`bg-gray-100 text-gray-500 py-2 mb-2 w-full`)} />  <br/>
      <label><p class="text-lg text-black font-semibold">AGE AT THE DATE OF</p></label>
      <br/>
    <input type="date" placeholder="presentDate" defaultValue="2022-03-12" {...register("presentDate")}
       className={tw(`bg-gray-100 text-gray-500 py-2 mb-2 w-full`)} />  <br/>
    

        {errors.birthDate && <span className={tw(`shadow appearance-none border rounded w-full text-red-500 py-3 mb-3`)}>This field is required</span>}
        <br/>
        <center>
        <button className={tw(`text-uppercase text-black font-semibold inline-block text-blue-800 rounded shadow py-2 px-5 text-sm hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`)}>
          Calculate
        </button>
        </center>
      
      </form>
      </center>
      <div>
      
        
<center><p class="text-lg text-black font-semibold">Result</p></center>

<center>
<form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-800 block p-6 rounded-lg shadow-lg bg-pink-200 max-w-sm m-6`)} >
<div class="space-y-0.5">
      <p class="text-lg text-black font-semibold mb-2">
      Your Age is:
      </p>
      <p class="text-blue-500 font-medium mb-2">
      31 years, 3 months, 15 days
      </p>
      <p class="text-lg text-black font-semibold mb-2">
      Your Age in Month is:
      </p>
      <p class=" text-blue-500 font-medium mb-2">
      375 months, 2 weeks, 1 days
      </p>
      <p class="text-lg text-black font-semibold mb-2">
      Your Age in Week is:
      </p>
      <p class="text-blue-500 font-medium mb-2">
      1632 weeks, 4 days, 11 hours
      </p>
      <p class="text-lg text-black font-semibold mb-2">
      Your Age in Days is:
      </p>
      <p class="text-blue-500 font-medium mb-2">
      11428 days, 11 hours, 12 minutes
      </p>
      <p class="text-lg text-black font-semibold mb-2">
      Your Age in Hours is:
      </p>
      <p class="text-blue-500 font-medium mb-2">
      274283 hours, 12 minutes, 8 seconds
      </p>
      <p class="text-lg text-black font-semibold mb-2">
      Your Age in Minutes is:
       </p>
      <p class="text-blue-500 font-medium mb-2">
      16456992 minutes, and 8 seconds
      </p>
      <p class="text-lg text-black font-semibold mb-2">
      Your Age in Seconds is:
       </p>
      <p class="text-blue-500 font-medium mb-2">
      987419528 seconds since your birth
      </p>
    </div>
</form>
</center>

      </div>
    </div>
    
  );
}