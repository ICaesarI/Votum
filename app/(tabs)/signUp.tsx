import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { Formik } from "formik";
import { signUpValidation } from "@/src/validations/signUpValidation";

const SignUpScreen = () => {
  const handleSignUp = async (values) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredentials.user;

      const userData = {
        UID: user.uid,
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        createdAt: new Date().toISOString(), 
      };

      console.log("Datos a guardar en Firestore:", userData);

      await setDoc(doc(db, "users", user.uid), userData);

      console.log("User saved in Firestore");
      Alert.alert("Éxito", "Usuario creado correctamente");
    } catch (error) {
      Alert.alert("Error", `Ocurrió un error: ${error.message}`);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", lastName: "", email: "", password: "" }}
      validationSchema={signUpValidation}
      onSubmit={handleSignUp}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Regístrate</Text>

          <TextInput
            style={styles.input}
            value={values.name}
            onChangeText={handleChange("name")}
            onBlur={handleBlur("name")}
            placeholder="Nombre"
          />
          {touched.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}

          <TextInput
            style={styles.input}
            value={values.lastName}
            onChangeText={handleChange("lastName")}
            onBlur={handleBlur("lastName")}
            placeholder="Apellidos"
          />
          {touched.lastName && errors.lastName && (
            <Text style={styles.error}>{errors.lastName}</Text>
          )}

          <TextInput
            style={styles.input}
            value={values.email}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            keyboardType="email-address"
            placeholder="Correo electrónico"
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            value={values.password}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            placeholder="Contraseña"
            secureTextEntry
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );


};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpScreen;
