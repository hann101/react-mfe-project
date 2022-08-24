import setLocale from "yup";

setLocale({
  // use constant translation keys for messages without values
  mixed: {
    required: "é um campo obrigatório"
  }
  // use functions to generate an error object that includes the value from the schema
});
