import * as yup from "yup";

export const signUpValidation = yup.object().shape({
  email: yup
    .string()
    .email("Correo inválido")
    .required("Correo requerido"),
  password: yup
    .string()
    .min(8, "Introduce un minimo de 8 Caracteres")
    .matches(/[A-Z]/, "Debe contener una letra mayúscula")
    .matches(/[a-z]/, "Debe contener una letra minuscu")
    .matches(/\d/, "Debe contener un al menos un número")
    .matches(/[@$!%*?]/,"Debe contener un al menos un caracter especial(@$!%*?)")
    .required("Constraseña requerido"),
  name: yup
    .string()
    .required("Nombre Requerido"),
  lastName: yup
    .string()
    .required("Apellido Requerido"),});
