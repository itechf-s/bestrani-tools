import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { apply, tw } from 'twind';
import Button from "@/components/button";
import { error } from "console";

type Inputs = {
  birthDate: Date,
  presentDate: Date
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const twForm = apply(`border border-blue-500 rounded-lg shadow-lg bg-pink-200 max-w-sm my-8 p-8 m-auto space-y-2`)
  const twInputBtn = apply(`py-2 px-4 m-14 border rounded text-uppercase font-bold rounded-lg bg-yellow-400 text-black shadow-md hover:bg-pink-500 hover:text-white`)
  const twInputText = apply(`w-full py-2 pl-3 pr-4 bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:border-indigo-500`)
  const twLabel = apply(`text-lg text-black font-bold`)
  const twErrorMsg = apply(`text-red-600 py-2`)

  console.log(watch("birthDate"))

  return (
    <div className={tw(`items-center my-2`)}>

      <form onSubmit={handleSubmit(onSubmit)} className={tw`${twForm}`}>


        <div className={tw`${twLabel}`}>SELECT DATE OF BIRTH</div>
        <input type="date" placeholder="birthDate" defaultValue="2017-10-13" {...register("birthDate", { required: true })}
          className={tw`${twInputText}`} />
        {errors.birthDate && <span className={tw`${twErrorMsg}`}>DATE OF BIRTH Required.</span>}

        <div className={tw`${twLabel}`}>AGE AT THE DATE OF</div>
        <input type="date" placeholder="presentDate" defaultValue="2022-03-12" {...register("presentDate", { required: true })}
          className={tw`${twInputText}`} />
        {errors.presentDate && <span className={tw`${twErrorMsg}`}>AGE AT THE DATE OF Required.</span>}
        <div></div>
        <input type="submit" value="Calculate" className={tw`${twInputBtn}`} />

      </form>
      <div>


        <p className={tw(`text-lg text-black font-semibold`)}>Result</p>

        <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-800 block p-6 rounded-lg shadow-lg bg-pink-200 max-w-sm m-6`)} >
          <div className={tw(`space-y-0.5`)}>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age is:
            </p>
            <p className={tw(`text-blue-500 font-medium mb-2`)}>
              31 years, 3 months, 15 days
            </p>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age in Month is:
            </p>
            <p className={tw(` text-blue-500 font-medium mb-2`)}>
              375 months, 2 weeks, 1 days
            </p>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age in Week is:
            </p>
            <p className={tw(`text-blue-500 font-medium mb-2`)}>
              1632 weeks, 4 days, 11 hours
            </p>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age in Days is:
            </p>
            <p className={tw(`text-blue-500 font-medium mb-2`)}>
              11428 days, 11 hours, 12 minutes
            </p>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age in Hours is:
            </p>
            <p className={tw(`text-blue-500 font-medium mb-2`)}>
              274283 hours, 12 minutes, 8 seconds
            </p>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age in Minutes is:
            </p>
            <p className={tw(`text-blue-500 font-medium mb-2`)}>
              16456992 minutes, and 8 seconds
            </p>
            <p className={tw(`text-lg text-black font-semibold mb-2`)}>
              Your Age in Seconds is:
            </p>
            <p className={tw(`text-blue-500 font-medium mb-2`)}>
              987419528 seconds since your birth
            </p>
          </div>
        </form>

      </div>
    </div>

  );
}