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
    <div className={tw(`place-self-center`)}>
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-800 bg-red-200 min-w-0 rounded text-gray-800 py-6 px-3 mr-2 w-60`)} >
      <label>SELECT DATE OF BIRTH</label>
      <br />
      <input type="date" placeholder="birthDate" defaultValue="2017-10-13" {...register("birthDate", {required: true})}
      className={tw(`text-red-500 py-3 mb-3`)} />  <br/>
      <label>AGE AT THE DATE OF</label>
      <br/>
    <input type="date" placeholder="presentDate" defaultValue="2022-03-12" {...register("presentDate")}
      className={tw(`text-red-500 py-3 mb-3`)}
      />

        {errors.birthDate && <span className={tw(`text-red-500 py-3 mb-3`)}>This field is required</span>}
        <br/>
        <button className={tw(`text-uppercase inline-block bg-yellow-700 text-blue-800 rounded shadow py-2 px-5 text-sm hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2`)}>
          Calculate
        </button>
      </form>
      <div>
        </div>
        
Result
<form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-800 bg-white-200 min-w-0 rounded text-gray-800 py-6 px-3 mr-2 w-60`)} >
<div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
      Your Age is:
      </p>
      <p class="text-slate-500 font-medium">
      31 years, 3 months, 15 days
      </p>
      <p class="text-lg text-black font-semibold">
      Your Age in Month is:
      </p>
      <p class="text-slate-500 font-medium">
      375 months, 2 weeks, 1 days
      </p>
      <p class="text-lg text-black font-semibold">
      Your Age in Week is:
      </p>
      <p class="text-slate-500 font-medium">
      1632 weeks, 4 days, 11 hours
      </p>
      <p class="text-lg text-black font-semibold">
      Your Age in Days is:
      </p>
      <p class="text-slate-500 font-medium">
      11428 days, 11 hours, 12 minutes
      </p>
      <p class="text-lg text-black font-semibold">
      Your Age in Hours is:
      </p>
      <p class="text-slate-500 font-medium">
      274283 hours, 12 minutes, 8 seconds
      </p>
      <p class="text-lg text-black font-semibold">
      Your Age in Minutes is:
       </p>
      <p class="text-slate-500 font-medium">
      16456992 minutes, and 8 seconds
      </p>
      <p class="text-lg text-black font-semibold">
      Your Age in Seconds is:
       </p>
      <p class="text-slate-500 font-medium">
      987419528 seconds since your birth
      </p>

    </div>
</form>

      </div>
    </div>
  );
}