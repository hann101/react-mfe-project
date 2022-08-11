import * as yup from "yup";
let schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  })
});

schema
  .isValid({
    name: "Jimmy",
    age: 24
  })
  .then(function (valid) {
    console.log(valid); // => true
  })
  .catch();

schema.cast({
  name: "jimmy",
  age: "24",
  createdOn: "2014-09-23T19:25:25Z"
});
