import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';
import style from "@/components/style"

type Inputs = {
  gender : string,
  system : string,
  age: String,
  cms: number,
  feet: number,
  inch: number
};

type Result = { formula: string, outString: string, bmi: string }

export default function IdealBodyWeight() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    const output:Result[] = [{formula:'Peterson formula (2016)', outString:objIWC.petersonFormula(data.cms), bmi: objIWC.bmiRange(data.cms)},
    {formula:'Miller formula (1983)', outString:objIWC.milFormula(data.gender, data.cms), bmi: objIWC.bmiRange(data.cms)},
    {formula:'Robinson formula (1983)', outString:objIWC.robFormula(data.gender, data.cms), bmi: objIWC.bmiRange(data.cms)},
    {formula:'Devine formula (1974)', outString:objIWC.devFormula(data.gender, data.cms), bmi: objIWC.bmiRange(data.cms)},
    {formula:'Hamwi formula (1964)', outString:objIWC.hamFormula(data.gender, data.cms), bmi: objIWC.bmiRange(data.cms)}
  ];
    setResult(output);
    console.log(data.gender);
  }
    
  const [result, setResult] = useState<Result[]>();

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw`${style.twForm}`} >
        <label className={tw`${style.twLabel}`}>Gender</label>
        <br />
      <input {...register("gender", { required: true })} type="radio" id="male" value="male" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="male" className={tw`${style.twRadioLabel}`}>Male</label>
      <input {...register("gender", { required: true })} type="radio" id="female" value="female" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="female" className={tw`${style.twRadioLabel}`}>Female</label>
      <br />
      {errors.gender && <span className={tw`${style.twErrorMsg}`}>Gender Required.</span>}
      <br />
        <label className={tw`${style.twLabel}`}>System</label>
        <br />
        <input {...register("system", { required: true })} type="radio" id="Metric" value="Metric" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="Metric" className={tw`${style.twRadioLabel}`}>Metric (cms)</label>
      <br />
      <input {...register("system", { required: true })} type="radio" id="Imperial" value="Imperial" className={tw`${style.twRadioBtn}`} />
      <label htmlFor="Imperial" className={tw`${style.twRadioLabel}`}>Imperial (feet/inches)</label>
      <br />
      {errors.system && <span className={tw`${style.twErrorMsg}`}>System Required.</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Age</label>
        <br />
        <input type="text" placeholder="Your Age 2-85" {...register("age", { required: true })}
          className={tw`${style.twInputText}`} />
        {errors.age && <span className={tw`${style.twErrorMsg}`}>Age is required</span>}
        <br />
        <label className={tw`${style.twLabel}`}>Your Height</label>
        <br />
        <input type="text" placeholder="Your Height in Cms" {...register("cms", { required: true })}
          className={tw`${style.twInputText}`}
        />
        {errors.cms && <span className={tw`${style.twErrorMsg}`}>Height is required</span>}

        <br />
        <button className={tw`${style.twInputBtn}`}>
          Calculate
        </button>
      </form>
      {result &&
        <>
          <div className={tw`${style.twResultT}`}>Results {result[0].outString}</div>
          <div className={tw`${style.twResultT}`}>Results {result[0].bmi}</div>
          <div className={tw`${style.twResultBlock}`}>
            <div className={tw`${style.twLabel}`}>Your ideal weight according to:</div>
            {result.map(({formula, outString, bmi  }, index: number) => (
<>
<div className={tw`${style.twResultLabel}`}>{formula} </div>
<div className={tw`${style.twResultText}`}>{outString}</div>
</>
            )
            
            )}
            <div className={tw`${style.twResultLabel}`}>Miller formula (1983) </div>
            <div className={tw`${style.twResultText}`}>70.3Kgs/155.0 Pounds</div>
            <div className={tw`${style.twResultLabel}`}>Robinson formula (1983) </div>
            <div className={tw`${style.twResultText}`}>71.0Kgs/156.6 Pounds</div>
            <div className={tw`${style.twResultLabel}`}>Devine formula (1974) </div>
            <div className={tw`${style.twResultText}`}>73.0Kgs/161.0 Pounds</div>
            <div className={tw`${style.twResultLabel}`}>Hamwi formula (1964) </div>
            <div className={tw`${style.twResultText}`}>75.0Kgs/165.4 Pounds</div>
            <div className={tw`${style.twLabel}`}>Healthy BMI Range:</div>
            <div className={tw`${style.twResultText}`}>{result[0].bmi} Kgs</div>
          </div>
        </>
      }
    </div>
  );
}

const objIWC = {
  bmiRange: function (cms: any) {
    const height = cms / 100,
      w1 = 18.5 * Math.pow(height, 2),
      w2 = 25 * Math.pow(height, 2);
    const res = (w1.toFixed(1) + ' - ' + w2.toFixed(1));
    return res;
  },
  petersonFormula: function (cms:number) {
    const height = cms / 100,
      weight = 2.2 * 22 + 3.5 * 22 * (height - 1.5),
      pound = weight * 2.205;
    const res = weight.toFixed(1) + 'Kgs' + pound.toFixed(1) + 'Pounds';
    return res;
  },
  mCalc: function (gender: string, cms: number, mW: number, fW: number, mPW: number, fPW: number) {
    var weight, finalVal;
      finalVal = cms / 2.54 - 60;
    if (gender == 'male') {
      weight = mW + mPW * finalVal;
    } else {
      weight = fW + fPW * finalVal;
    }
    return weight.toFixed(1);
  },
  hamFormula: function (gender: string, cms: number) {
    var weight:any = objIWC.mCalc(gender, cms, 48, 45.5, 2.7, 2.2);
    var pound:number = weight * 2.205;
    const res = weight + 'Kgs' + pound.toFixed(1) + 'Pounds';
    return res;
  },
  devFormula: function (gender: string, cms: number) {
    var weight:any = objIWC.mCalc(gender, cms, 50, 45.5, 2.3, 2.3),
      pound = weight * 2.205;
    const res = weight + 'Kgs' + pound.toFixed(1) + 'Pounds';
    return res;
  },
  robFormula: function (gender: string, cms: number) {
    var weight:any = objIWC.mCalc(gender, cms, 52, 49, 1.9, 1.7),
      pound = weight * 2.205;
    const res = weight + 'Kgs' + pound.toFixed(1) + 'Pounds';
    return res;
  },
  milFormula: function (gender: string, cms: number) {
    var weight:any = objIWC.mCalc(gender, cms, 56.2, 53.1, 1.41, 1.36),
      pound = weight * 2.205;
    const res = weight + 'Kgs' + pound.toFixed(1) + 'Pounds';
    return res;
  }
};

function index(arg0: { formula: any; outString: any; bmi: any; }, index: any): React.ReactNode {
  throw new Error("Function not implemented.");
}
