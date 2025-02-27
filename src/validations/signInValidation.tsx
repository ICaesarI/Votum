import * as yup from "yup";

export const signInValidation = yup.object().shape({
  email: yup.string().email("Correo inválido").required("Correo requerido"),
  password: yup.string().required("Contraseña requerida"),
});
