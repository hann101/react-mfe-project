import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as common from "../../components/Popup/confirm";

const schema = yup.object().shape({
  email: yup.string().required("this doesnot "),
  password: yup.string().min(8).max(32).required("hhh")
});
//alt customizing , error handler,
const Validate = () => {
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

      <input {...register("email")} placeholder="email" type="text" />
      {errors.email && <p>{errors.email.message}</p>}

      {/* {errors.email &&
        common
          .alert("삭제되었습니다.")
          .then(() => console.log("###samplePopup alert confirm"))} */}

      <br />

      <input {...register("password")} placeholder="password" type="text" />
      {errors.password && <p>{errors.password.message}</p>}
      <br />

      <button type="submit">Sign in</button>
    </form>
  );
};

export default Validate;
