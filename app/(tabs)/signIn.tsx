import React from "react";
import { useState } from "react";
import { useRouter } from "expo-router"; 
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { auth, db } from "@/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { Formik } from "formik";
import { signInValidation } from "@/src/validations/signInValidation";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const [userName, setUserName] = useState("");
  const router = useRouter(); 

  const handleLogin = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;

      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        const name = userSnap.exists() ? userSnap.data().name : user.email;
        router.push("/"); 

      }
    } catch (error) {
      setUserName("Error al iniciar sesión");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>

      {userName ? <Text style={styles.welcomeText}>{userName}</Text> : null}

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInValidation}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Correo Electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = {
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: "green",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "white", fontWeight: "bold" },
  error: { color: "red", fontSize: 12, marginBottom: 5 },
};

export default SignInScreen;
