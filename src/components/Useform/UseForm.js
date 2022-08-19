import { ConstructionOutlined } from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
// import "./styles.css";
let renderCount = 0;

function UseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  console.log(errors);
  return (
    <div>
      <header>Hello this is New world!</header>
      <form
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "This is required." })}
          placeholder="FirstName"
        />
        {/* {errors.firstName?.message} */}
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input
          {...register("lastName", {
            required: "This is required.",
            minLength: {
              value: 4,
              message: "Min length is 4"
            }
          })}
          placeholder="LastName"
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default UseForm;
