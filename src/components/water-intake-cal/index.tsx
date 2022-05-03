import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';
import style from "@/components/style"

type Inputs = {
  weight: string,
  exercise: string
};

type Result = { litres: string, ounces: string, cups: string }

export default function WaterIntake() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setResult(process(data.weight, data.exercise));
  }

  const [result, setResult] = useState<Result>();

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${style.twForm}`} >
        <label className={tw`${style.twLabel}`}>Weight</label>
        <br />
        <input type="number" placeholder="Weight" min={2} max={185} {...register("weight", { required: true, value: "3" })}
          className={tw`${style.twInputText}`} />
        {errors.weight && <span className={tw`${style.twErrorMsg}`}>Weight is required</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Minutes of Exercise Daily</label>
        <br />
        <input type="number" placeholder="Minutes of Exercise Daily" max={300} {...register("exercise", { required: true, value: "0" })}
          className={tw`${style.twInputText}`}
        />
        {errors.exercise && <span className={tw`${style.twErrorMsg}`}>Exercise is required</span>}

        <br />
        <button className={tw`${style.twInputBtn}`}>
          Calculate
        </button>
      </form>
      {result &&
        <>
          <div className={tw`${style.twResultT}`}>Results</div>
          <div className={tw`${style.twResultBlock}`}>
            <div className={tw`${style.twResultXLText}`}>Daily Water Intake</div>

            <div className={tw`${style.twResultBoldText}`}>{result.litres} Litres</div>
            <div className={tw`${style.twResultT}`}>OR</div>
            <div className={tw`${style.twResultBoldText}`}>{result.ounces} Ounces</div>
            <div className={tw`${style.twResultT}`}>OR</div>
            <div className={tw`${style.twResultBoldText}`}>{result.cups} Cups</div>
          </div>
        </>
      }
    </div>
  );
}

function conv_wgt_punds(wtg_set: string) {
  return Math.round(parseFloat(wtg_set) * (2.20462));
}
function conv_wgt_kgs(wtg_set: string) {
  return Math.round(parseFloat(wtg_set) * (0.453592));
}
function process(weight_kg: string, exercise: string) {

  var ounces,
    cups = '',
    liters,
    wgt,
    workout_cal,
    tot_ounces;
  wgt = conv_wgt_punds(weight_kg);
  ounces = Math.round(wgt * (2.0 / 3.0))
  workout_cal = (parseFloat(exercise) / 30.0 * 12.0);
  tot_ounces = Math.round((ounces + workout_cal));
  liters = (tot_ounces * 0.0295735).toFixed(2);
  cups = (tot_ounces * 0.125).toFixed(2);
  const output: Result = { litres: liters, ounces: tot_ounces.toFixed(2), cups: cups }
  return output
}