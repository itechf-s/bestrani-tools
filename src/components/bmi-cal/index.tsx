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
        <label className={tw`${style.twLabel}`}>Age</label>
        <br />
        <input type="number" placeholder="Your Age 2-85" min={2} max={85} {...register("age", { required: true, value: "24" })}
          className={tw`${style.twInputText}`} />
        {errors.age && <span className={tw`${style.twErrorMsg}`}>Age is required</span>}
        <br />
        <br />
        <label className={tw`${style.twLabel}`}>Enter your height</label>
        <br />
        <input type="number" placeholder="Your Height in Cms" min={61} max={200} {...register("cms", { required: true, max: 200, value : 170 })}
          className={tw`${style.twInputText}`}
        />
        {errors.cms && <span className={tw`${style.twErrorMsg}`}>Height is required</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Enter Your Weight</label>
        <br />
        <input type="number" placeholder="Your weight" min={2} max={155} {...register("weight", { required: true, value: 40 })}
          className={tw`${style.twInputText}`} />
        {errors.weight && <span className={tw`${style.twErrorMsg}`}>Weight is required</span>}
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
