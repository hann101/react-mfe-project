import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setLocale } from "yup";

const schema = yup.object().shape({
  // schema.shape({
  id: yup.string().required(), // required 설정
  age: yup
    .number()
    // .min(3, "3이상 값을 입력해주세요.")
    // .max(10, "10이하 값을 입력해주세요.")
    .typeError("값을 입력해주세요.") // 최솟값, 최댓값 설정
});

// setLocale({
//   // use constant translation keys for messages without values
//   mixed: {
//     required: "é um campo obrigatório"
//   },
//   // use functions to generate an error object that includes the value from the schema
//   number: {
//     min: ({ min }) => ({ key: "field_too_short", values: { min } }),
//     max: ({ max }) => ({ key: "field_too_big", values: { max } })
//   }
// });

const YupUseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmitHandler = data => {
    console.log({ data });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <h2>Lets sign you in.</h2>
      <br />
      <input {...register("id")} placeholder="id" type="text" />
      {errors.id && <h3>{errors.id.message}</h3>} <br />
      <input {...register("age")} placeholder="age" type="text" />
      {errors.age && <h3>{errors.age.message}</h3>}
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default YupUseForm;
