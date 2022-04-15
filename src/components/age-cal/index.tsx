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
      <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)} >
      <label>Birth Date</label>
      <br />
      <input type="date" placeholder="birthDate" defaultValue="2017-10-13" {...register("birthDate", {required: true})}
      className={tw(`text-red-500 py-3 mb-3`)} />
      <label>Present Date</label>
      <br />
      <input type="date" placeholder="presentDate" defaultValue="2022-03-12" {...register("presentDate")}
      className={tw(`text-red-500 py-3 mb-3`)}
      />

        {errors.birthDate && <span className={tw(`text-red-500 py-3 mb-3`)}>This field is required</span>}
        <br/>
        <button className={tw(`text-uppercase inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm`)}>
          Calculate
        </button>
      </form>
      <div>
Result

      </div>
    </div>
  );
}