import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';
import style from "@/components/style"

type Inputs = {
  gender: string,
  system: string,
  weight: number,
  activity: number,
};

type Result = { proteinIntake: string}

export default function IdealBodyWeight() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    const proteinIntake = data.weight * data.activity
    const output: Result = {proteinIntake : proteinIntake.toFixed(2)}
    setResult(output);
  }

  const [result, setResult] = useState<Result>();

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${style.twForm}`} >
        <label className={tw`${style.twLabel}`}>Gender</label>
        <br />
        <input checked {...register("gender", { required: true })} type="radio" id="male" value="male" className={tw`${style.twRadioBtn}`} />
        <label htmlFor="male" className={tw`${style.twRadioLabel}`}>Male</label>
        <input {...register("gender", { required: true })} type="radio" id="female" value="female" className={tw`${style.twRadioBtn}`} />
        <label htmlFor="female" className={tw`${style.twRadioLabel}`}>Female</label>
        <br />
        {errors.gender && <span className={tw`${style.twErrorMsg}`}>Gender Required.</span>}
        <br />
        <label className={tw`${style.twLabel}`}>System</label>
        <br />
        <input checked {...register("system", { required: true })} type="radio" id="Metric" value="Metric" className={tw`${style.twRadioBtn}`} />
        <label htmlFor="Metric" className={tw`${style.twRadioLabel}`}>Metric (Kgs)</label>
        <br />
        <input disabled {...register("system", { required: true })} type="radio" id="Imperial" value="Imperial" className={tw`${style.twRadioBtn}`} />
        <label htmlFor="Imperial" className={tw`${style.twRadioLabel}`}>Imperial (Lbs)</label>
        <br />
        {errors.system && <span className={tw`${style.twErrorMsg}`}>System Required.</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Enter Your Weight</label>
        <br />
        <input type="number" placeholder="Your weight 2-85" min={2} max={85} {...register("weight", { required: true, value: "24" })}
          className={tw`${style.twInputText}`} />
        {errors.weight && <span className={tw`${style.twErrorMsg}`}>Weight is required</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Physical Activity</label>
        <br />
        <select {...register("activity", { required: true })} className={tw`${style.twInputText}`}>
      <option value="1.2" selected>Sedentary: little or no exercise</option>
      <option value="1.375">Light: exercise 1-3 times/week</option>
      <option value="1.465">Moderate: exercise 4-5 times/week</option>
      <option value="1.55">Active: daily exercise or intense exercise 3-4 times/week</option>
      <option value="1.725">Very Active: intense exercise 6-7 times/week</option>
      <option value="1.9">Extra Active: very intense exercise daily, or physical job</option>
      </select>

        {errors.weight && <span className={tw`${style.twErrorMsg}`}>Please select Physical Activity</span>}

        <br />
        <button className={tw`${style.twInputBtn}`}>
          Calculate
        </button>
      </form>
      {result &&
        <>
          <div className={tw`${style.twResultT}`}>Results</div>
          <div className={tw`${style.twResultBlock}`}>
            <div className={tw`${style.twResultLabel}`}>Protein per day : </div>
            <div className={tw`${style.twResultBoldText}`}>{result.proteinIntake} grams</div>
          </div>
        </>
      }
    </div>
  );
}
