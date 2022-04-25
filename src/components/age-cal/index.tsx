import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';
import style from "@/components/style"
import { DateTime } from 'luxon';



type Inputs = {
  birthDate: Date,
  presentDate: Date
};

type Result = {
  yymmdd: string,
  mmwwdd: string,
  wwddhh: string,
  ddhhmm: string,
  hhmmss: string,
  mmss: string,
  ss: string,
}
const isDate = (date:any) => (date != "Invalid Date" && !isNaN(date))

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [result, setResult] = useState<Result>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    if (isDate(data.birthDate) && isDate(data.presentDate)) {
      const startDate = DateTime.fromJSDate(data.birthDate)
      const endDate = DateTime.fromJSDate(data.presentDate)
      // console.log(`start Date ${startDate} | end date ${endDate}`);
      let output: Result = {
        yymmdd: endDate.diff(startDate, ['years', 'months', 'days']).toHuman(),
        mmwwdd: endDate.diff(startDate, ['months', 'weeks', 'days']).toHuman(),
        wwddhh: endDate.diff(startDate, ['weeks', 'days', 'hours']).toHuman(),
        ddhhmm: endDate.diff(startDate, ['days', 'hours', 'minutes']).toHuman(),
        hhmmss: endDate.diff(startDate, ['hours', 'minutes', 'seconds']).toHuman(),
        mmss: endDate.diff(startDate, ['minutes', 'seconds']).toHuman(),
        ss: endDate.diff(startDate, ['seconds']).toHuman()
      }
      setResult(output)
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${style.twForm}`}>


        <div className={tw`${style.twLabel}`} >SELECT DATE OF BIRTH</div>
        <input type="date" id="birthDate" pattern="\d{4}-\d{2}-\d{2}" placeholder="birthDate" defaultValue="2017-10-13" max={DateTime.now().toISODate()} {...register("birthDate", { required: true, valueAsDate: true })}
          className={tw`${style.twInputText}`} />
        {errors.birthDate && <span className={tw`${style.twErrorMsg}`}>DATE OF BIRTH Required.</span>}

        <div className={tw`${style.twLabel}`}>AGE AT THE DATE OF</div>
        <input type="date" placeholder="presentDate" defaultValue={DateTime.now().toISODate()} {...register("presentDate", { required: true, valueAsDate: true })}
          className={tw`${style.twInputText}`} />
        {errors.presentDate && <span className={tw`${style.twErrorMsg}`}>AGE AT THE DATE OF Required.</span>}
        <div></div>
        <input type="submit" value="Calculate" className={tw`${style.twInputBtn}`} />

      </form>

      { result &&
        <div>
        <div className={tw`${style.twResultT}`}>Results</div>
        <div className={tw`${style.twResultBlock}`}>
          <div className={tw`${style.twResultLabel}`}>Your Age is:</div>
          <div className={tw`${style.twResultText}`}>{result?.yymmdd}</div>

          <div className={tw`${style.twResultLabel}`}>Your Age in Month is:</div>
          <div className={tw`${style.twResultText}`}>{result?.mmwwdd}</div>

          <div className={tw`${style.twResultLabel}`}>Your Age in Week is:</div>
          <div className={tw`${style.twResultText}`}>{result?.wwddhh}</div>

          <div className={tw`${style.twResultLabel}`}>Your Age in Days is:</div>
          <div className={tw`${style.twResultText}`}>{result?.ddhhmm}</div>

          <div className={tw`${style.twResultLabel}`}>Your Age in Hours is:</div>
          <div className={tw`${style.twResultText}`}>{result?.hhmmss}</div>

          <div className={tw`${style.twResultLabel}`}>Your Age in Minutes is:</div>
          <div className={tw`${style.twResultText}`}>{result?.mmss}</div>

          <div className={tw`${style.twResultLabel}`}>Your Age in Seconds is:</div>
          <div className={tw`${style.twResultText}`}>{result?.ss} since your birth</div>
        </div>
      </div>}

    </>
  );
}