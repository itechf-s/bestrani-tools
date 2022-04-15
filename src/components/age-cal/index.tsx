import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { tw } from 'twind';

type Inputs = {
  birthDate : Date,
  example: string,
  exampleRequired: string,
};

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch("example"))

  return (
    <div className={tw(`container`)}>
      <form onSubmit={handleSubmit(onSubmit)} className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)} >
      <input type="date" placeholder="birthDate" {...register("birthDate")} />

        <input defaultValue="test" {...register("example")} 
        className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
        />
        
        <input {...register("exampleRequired", { required: true })} 
        className={tw(`border border-gray-300 bg-red-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
        />

        {errors.exampleRequired && <span className={tw(`text-red-500 py-3 mb-3`)}>This field is required</span>}
        <br/>
        <button className={tw(`inline-block bg-yellow-500 text-yellow-800 rounded shadow py-2 px-5 text-sm`)}>
          Submit
        </button>
      </form>
    </div>
  );
}