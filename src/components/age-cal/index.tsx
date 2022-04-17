import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { apply, tw } from 'twind';

type Inputs = {
  birthDate: Date,
  presentDate: Date
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const twForm = apply(`border-2 border-gray-300 bg-gray-200 rounded-lg shadow-lg max-w-sm my-8 p-8 m-auto space-y-2`)
  const twInputBtn = apply(`max-w-sm m-auto items-center py-2 px-4 border-2 rounded text-uppercase font-bold rounded-lg bg-yellow-400 text-black shadow-md hover:bg-pink-100`)
  const twInputText = apply(`w-full py-2 pl-3 pr-4 rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:border-indigo-500 hover:bg-pink-100`)
  const twLabel = apply(`p-2 text-lg text-black font-bold rounded-lg hover:bg-pink-100`)
  const twErrorMsg = apply(`text-red-600 py-2`)
  const twHr = apply(`max-w-sm mt-8 mb-8 m-auto border-2 border-green-400`)
  const twResultT = apply(`max-w-sm m-auto text-3xl font-bold text-green-600 text-center mt-8 mb-8`)
  const twResultBlock = apply(`border-2 border-gray-300 max-w-sm p-4 m-auto`)
  const twResultLabel = apply(`pl-2 mt-2 text-lg text-gray-700 font-bold`)
  const twResultText = apply(`pl-2 text-lg text-blue-600 font-medium hover:text-blue-800 hover:font-bold`)

  console.log(watch("birthDate"))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${twForm}`}>


        <div className={tw`${twLabel}`} >SELECT DATE OF BIRTH</div>
        <input type="date" id="birthDate" placeholder="birthDate" defaultValue="2017-10-13" {...register("birthDate", { required: true })}
          className={tw`${twInputText}`} />
        {errors.birthDate && <span className={tw`${twErrorMsg}`}>DATE OF BIRTH Required.</span>}

        <div className={tw`${twLabel}`}>AGE AT THE DATE OF</div>
        <input type="date" placeholder="presentDate" defaultValue="2022-03-12" {...register("presentDate", { required: true })}
          className={tw`${twInputText}`} />
        {errors.presentDate && <span className={tw`${twErrorMsg}`}>AGE AT THE DATE OF Required.</span>}
        <div></div>
        <input type="submit" value="Calculate" className={tw`${twInputBtn}`} />

      </form>


      <div className={tw`${twResultT}`}>Results</div>
      <div className={tw`${twResultBlock}`}>
        <div className={tw`${twResultLabel}`}>Your Age is:</div>
        <div className={tw`${twResultText}`}>31 years, 3 months, 15 days</div>

        <div className={tw`${twResultLabel}`}>Your Age in Month is:</div>
        <div className={tw`${twResultText}`}>375 months, 2 weeks, 1 days</div>
        
        <div className={tw`${twResultLabel}`}>Your Age in Week is:</div>
        <div className={tw`${twResultText}`}>1632 weeks, 4 days, 11 hours</div>

        <div className={tw`${twResultLabel}`}>Your Age in Days is:</div>
        <div className={tw`${twResultText}`}>11428 days, 11 hours, 12 minutes</div>

        <div className={tw`${twResultLabel}`}>Your Age in Hours is:</div>
        <div className={tw`${twResultText}`}>274283 hours, 12 minutes, 8 seconds</div>

        <div className={tw`${twResultLabel}`}>Your Age in Minutes is:</div>
        <div className={tw`${twResultText}`}>16456992 minutes, and 8 seconds</div>

        <div className={tw`${twResultLabel}`}>Your Age in Seconds is:</div>
        <div className={tw`${twResultText}`}>987419528 seconds since your birth</div>
      </div>

    </>
  );
}