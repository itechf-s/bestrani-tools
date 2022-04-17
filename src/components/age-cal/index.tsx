import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { apply, tw } from 'twind';
import style from "@/components/style"


type Inputs = {
  birthDate: Date,
  presentDate: Date
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  
  console.log(watch("birthDate"))

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${style.twForm}`}>


        <div className={tw`${style.twLabel}`} >SELECT DATE OF BIRTH</div>
        <input type="date" id="birthDate" placeholder="birthDate" defaultValue="2017-10-13" {...register("birthDate", { required: true })}
          className={tw`${style.twInputText}`} />
        {errors.birthDate && <span className={tw`${style.twErrorMsg}`}>DATE OF BIRTH Required.</span>}

        <div className={tw`${style.twLabel}`}>AGE AT THE DATE OF</div>
        <input type="date" placeholder="presentDate" defaultValue="2022-03-12" {...register("presentDate", { required: true })}
          className={tw`${style.twInputText}`} />
        {errors.presentDate && <span className={tw`${style.twErrorMsg}`}>AGE AT THE DATE OF Required.</span>}
        <div></div>
        <input type="submit" value="Calculate" className={tw`${style.twInputBtn}`} />

      </form>


      <div className={tw`${style.twResultT}`}>Results {style.a} </div>
      <div className={tw`${style.twResultBlock}`}>
        <div className={tw`${style.twResultLabel}`}>Your Age is:</div>
        <div className={tw`${style.twResultText}`}>31 years, 3 months, 15 days</div>

        <div className={tw`${style.twResultLabel}`}>Your Age in Month is:</div>
        <div className={tw`${style.twResultText}`}>375 months, 2 weeks, 1 days</div>
        
        <div className={tw`${style.twResultLabel}`}>Your Age in Week is:</div>
        <div className={tw`${style.twResultText}`}>1632 weeks, 4 days, 11 hours</div>

        <div className={tw`${style.twResultLabel}`}>Your Age in Days is:</div>
        <div className={tw`${style.twResultText}`}>11428 days, 11 hours, 12 minutes</div>

        <div className={tw`${style.twResultLabel}`}>Your Age in Hours is:</div>
        <div className={tw`${style.twResultText}`}>274283 hours, 12 minutes, 8 seconds</div>

        <div className={tw`${style.twResultLabel}`}>Your Age in Minutes is:</div>
        <div className={tw`${style.twResultText}`}>16456992 minutes, and 8 seconds</div>

        <div className={tw`${style.twResultLabel}`}>Your Age in Seconds is:</div>
        <div className={tw`${style.twResultText}`}>987419528 seconds since your birth</div>
      </div>

    </>
  );
}